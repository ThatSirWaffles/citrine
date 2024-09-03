import { Button } from "@/components/ui/button"

export function ErrorPage() {
  return (
    <div className="flex w-full items-center flex-col justify-center h-full">
        <p className="text-3xl font-bold">Something went wrong</p>
        <p className="font-light mb-8 text-muted-foreground">Either an error occured, or this page doesn't exist</p>
        <a href="/">
          <Button variant="secondary">Return Home</Button>
        </a>
    </div>
  )
}
