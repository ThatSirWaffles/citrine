import { Mails } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-8">
        <Card className="border-primary/50 bg-primary/10">
          <CardHeader className="flex flex-row">
            <div className="grid gap-2">
              <CardTitle>Community Picks</CardTitle>
              <CardDescription>
                A weekly community-voted selection of games
              </CardDescription>
            </div>
            <a href="/vote" className="ml-auto">
              <Button size="sm" className="gap-2">
                <Mails className="h-5 w-5" />
                Vote
              </Button>
            </a>
          </CardHeader>
          <CardContent>
            placeholder
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
