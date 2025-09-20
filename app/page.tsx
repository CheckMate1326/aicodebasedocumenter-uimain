import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { RepoAnalyzer } from "@/components/repo-analyzer"
import { RecentActivity } from "@/components/recent-activity"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 space-y-20">
        <div className="bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 -mx-4 px-4">
          <HeroSection />
        </div>
        <FeatureCards />
        <RepoAnalyzer />
        <RecentActivity />
      </main>
      <footer className="border-t bg-card/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AI Documenter. Built with ❤️ for developers who care about documentation.
          </p>
        </div>
      </footer>
    </div>
  )
}
