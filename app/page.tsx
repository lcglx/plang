import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">
            🚀 Plan G
          </h1>
          <p className="text-2xl mb-2">
            Your Personal Life OS
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            An AI-powered, gamified life operating system that helps you design, plan, and live your life in alignment with who you are.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Life Scope</CardTitle>
              <CardDescription>Visualize your entire life in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                See all your life areas, tasks, and goals in a beautiful, organized view.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Companion</CardTitle>
              <CardDescription>Your personal life coach</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get personalized guidance and insights to help you achieve your goals.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Gamification</CardTitle>
              <CardDescription>Make life management fun</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Earn XP, level up, and compete with yourself to stay motivated.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

