import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="text-center space-y-12 py-8">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 shadow-sm">
          <Sparkles className="w-4 h-4 animate-pulse" />
          Powered by Advanced AI
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-heading text-balance leading-tight">
          Keep Your Code{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Documentation
          </span>{" "}
          Perfect
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
          Automatically scan your GitHub repositories, analyze code structure, and generate comprehensive documentation
          that stays in sync with your codebase.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button
          size="lg"
          className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Start Documenting
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-10 py-6 bg-transparent hover:bg-primary/5 border-2 hover:border-primary/30 transition-all duration-300"
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Demo
        </Button>
      </div>

      <Card className="p-10 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-primary/20 shadow-xl backdrop-blur-sm">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              500+
            </div>
            <div className="text-base text-muted-foreground font-medium">Repositories Documented</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              10k+
            </div>
            <div className="text-base text-muted-foreground font-medium">Functions Analyzed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              99%
            </div>
            <div className="text-base text-muted-foreground font-medium">Documentation Accuracy</div>
          </div>
        </div>
      </Card>
    </section>
  )
}
