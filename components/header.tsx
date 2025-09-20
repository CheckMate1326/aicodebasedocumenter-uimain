import { Button } from "@/components/ui/button"
import { Github, FileText, Zap, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-heading text-foreground">AI Documenter</h1>
              <p className="text-sm text-muted-foreground font-medium">Intelligent code documentation</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex hover:bg-primary/5 hover:border-primary/30 transition-colors bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              Connect GitHub
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
            >
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="sm:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
