import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitPullRequest, FileText, CheckCircle, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "pr-created",
    title: "Documentation update for user authentication",
    repo: "myapp/backend",
    user: "AI Documenter",
    avatar: "/futuristic-helper-robot.png",
    time: "2 minutes ago",
    status: "open",
  },
  {
    id: 2,
    type: "analysis-complete",
    title: "Code analysis completed",
    repo: "myapp/frontend",
    user: "AI Documenter",
    avatar: "/futuristic-helper-robot.png",
    time: "15 minutes ago",
    status: "completed",
  },
  {
    id: 3,
    type: "pr-merged",
    title: "API documentation improvements",
    repo: "myapp/api",
    user: "AI Documenter",
    avatar: "/futuristic-helper-robot.png",
    time: "1 hour ago",
    status: "merged",
  },
  {
    id: 4,
    type: "scan-started",
    title: "Repository scan initiated",
    repo: "myapp/mobile",
    user: "AI Documenter",
    avatar: "/futuristic-helper-robot.png",
    time: "3 hours ago",
    status: "in-progress",
  },
]

export function RecentActivity() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Recent Activity</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Track all documentation updates and repository analyses in real-time
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
          <CardDescription>Latest updates from your connected repositories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    {activity.type === "pr-created" && <GitPullRequest className="w-4 h-4 text-primary" />}
                    {activity.type === "analysis-complete" && <FileText className="w-4 h-4 text-accent" />}
                    {activity.type === "pr-merged" && <CheckCircle className="w-4 h-4 text-green-500" />}
                    {activity.type === "scan-started" && <Clock className="w-4 h-4 text-muted-foreground" />}

                    <span className="font-medium">{activity.title}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{activity.repo}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>

                <Badge
                  variant={
                    activity.status === "completed" || activity.status === "merged"
                      ? "default"
                      : activity.status === "open"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {activity.status === "open"
                    ? "Open"
                    : activity.status === "completed"
                      ? "Completed"
                      : activity.status === "merged"
                        ? "Merged"
                        : "In Progress"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
