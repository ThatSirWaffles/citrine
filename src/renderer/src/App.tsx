import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "./components/mode-toggle"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  Joystick,
  Hammer,
  Search,
  ShoppingCart,
  User,
  Users,
  ArrowUpRight,
  Minus,
  Square,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import citrineLogo from "./assets/citrine.png"
import { SidebarButton } from "./components/sidebar-button"
import { Card, CardContent, CardDescription, CardHeader } from "./components/ui/card"
import { Profile } from "./components/user-profile"
import { HomePage } from "./components/pages/home"
import { ErrorPage } from "./components/pages/error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }
]);

const draggable: React.CSSProperties = {
  // @ts-ignore
  WebkitAppRegion: 'drag'
};

const unDraggable: React.CSSProperties = {
  // @ts-ignore
  WebkitAppRegion: 'no-drag'
};

function App(): JSX.Element {
  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window');
  };

  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize-window');
  };

  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window');
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-full w-full">
        <header className="flex h-14 w-full items-center gap-4 bg-muted/40 px-4 lg:h-[60px] relative" style={draggable}>
          <div className="flex-none flex h-14 items-center pr-28">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <img className="h-6 w-6" src={citrineLogo} />
              <span className="text-primary font-bold text-2xl">Citrine</span>
            </a>
          </div>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-80 appearance-none bg-background pl-8 shadow-none"
                  style={unDraggable}
                />
              </div>
            </form>
          </div>
          <Profile style={unDraggable} />
          <div className="flex items-center h-10 p-1 bg-secondary rounded-full" style={unDraggable}>
            <Button id="min-button" onClick={handleMinimize} variant="secondary" size="icon" className="rounded-full hover:bg-white/10 h-8 w-8">
              <Minus className="h-5 w-5" />
            </Button>
            <Button id="mid-button" onClick={handleMaximize} variant="secondary" size="icon" className="rounded-full hover:bg-white/10 h-8 w-8">
              <Square className="h-4 w-4" />
            </Button>
            <Button id="close-button" onClick={handleClose} variant="secondary" size="icon" className="rounded-full hover:bg-destructive/60 h-8 w-8">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <div className="flex flex-cols w-full h-[calc(100vh-3.5rem-4px)]">
          <div className="flex flex-col w-[240px] gap-2 bg-muted/40">
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <SidebarButton href="#" selected={true}>
                  <Home className="h-4 w-4" />
                  Home
                </SidebarButton>
                <SidebarButton href="#">
                  <User className="h-4 w-4" />
                  Profile
                </SidebarButton>
                <SidebarButton href="#">
                  <Joystick className="h-4 w-4" />
                  Games
                </SidebarButton>
                <SidebarButton href="#">
                  <Users className="h-4 w-4" />
                  Groups
                </SidebarButton>
                <SidebarButton href="#">
                  <ShoppingCart className="h-4 w-4" />
                  Marketplace
                </SidebarButton>
                <SidebarButton href="#">
                  <Hammer className="h-4 w-4" />
                  Developer
                </SidebarButton>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader>
                  <CardDescription>
                  This is a very early release of Citrine. You can contribute to the project, report bugs and submit suggestions on Github.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <a href="https://github.com/ThatSirWaffles/citrine" target="_blank">
                    <Button size="sm" className="w-full gap-1">
                      Contribute
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex flex-grow bg-muted/40">
            <main className="bg-background overflow-auto w-full gap-4 p-4 lg:gap-6 lg:p-6 border-l border-t rounded-tl-lg">
              <RouterProvider router={router} />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
