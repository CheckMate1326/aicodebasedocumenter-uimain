import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scan, Brain, GitPullRequest, Shield, Clock, Zap } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "Smart Code Scanning",
    description:
      "Automatically detects functions, classes, APIs, and dependencies across your entire codebase with precision.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Uses advanced machine learning to understand code context and generate human-readable explanations.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: GitPullRequest,
    title: "Automated PRs",
    description:
      "Creates pull requests with updated documentation whenever your code changes, keeping everything in sync.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Always in Sync",
    description: "Keeps documentation perfectly aligned with your latest code changes through continuous monitoring.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description:
      "Monitors your repository 24/7 and updates documentation as you develop, no manual intervention needed.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Processes large codebases in minutes, not hours, using optimized AI algorithms and parallel processing.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export function FeatureCards() {
  return (
    <section className="space-y-12 py-8">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold font-heading">Powerful Features</h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
          Everything you need to maintain perfect documentation for your projects, powered by cutting-edge AI technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
          >
            <CardHeader className="pb-4">
              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <CardTitle className="text-xl font-heading font-bold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
