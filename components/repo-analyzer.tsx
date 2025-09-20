"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Search, FileText, Code, GitBranch, CheckCircle, Clock } from "lucide-react"

export function RepoAnalyzer() {
  const [repoUrl, setRepoUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleAnalyze = async () => {
    if (!repoUrl) return

    setIsAnalyzing(true)
    setAnalysisComplete(false)

    // Simulate analysis progress
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    setIsAnalyzing(false)
    setAnalysisComplete(true)
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Analyze Your Repository</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Enter your GitHub repository URL to get started with AI-powered documentation
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            Repository Analysis
          </CardTitle>
          <CardDescription>Paste your GitHub repository URL below to begin the analysis process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Input
              placeholder="https://github.com/username/repository"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAnalyze} disabled={!repoUrl || isAnalyzing} className="px-8">
              {isAnalyzing ? (
                <>
                  <Clock className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>

          {isAnalyzing && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Scanning repository...</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {analysisComplete && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="functions">Functions</TabsTrigger>
                <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Code className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">247</div>
                      <div className="text-sm text-muted-foreground">Functions Found</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <FileText className="w-8 h-8 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-bold">18</div>
                      <div className="text-sm text-muted-foreground">Files Analyzed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <GitBranch className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">Dependencies</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="text-2xl font-bold">94%</div>
                      <div className="text-sm text-muted-foreground">Coverage</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="functions" className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: "getUserData()", status: "documented", file: "src/utils/user.js" },
                    { name: "processPayment()", status: "needs-update", file: "src/api/payment.js" },
                    { name: "validateInput()", status: "documented", file: "src/utils/validation.js" },
                    { name: "generateReport()", status: "missing", file: "src/reports/generator.js" },
                  ].map((func, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Code className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <div className="font-mono font-medium">{func.name}</div>
                            <div className="text-sm text-muted-foreground">{func.file}</div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            func.status === "documented"
                              ? "default"
                              : func.status === "needs-update"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {func.status === "documented"
                            ? "Documented"
                            : func.status === "needs-update"
                              ? "Needs Update"
                              : "Missing Docs"}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="dependencies" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "react", version: "^18.2.0", status: "up-to-date" },
                    { name: "express", version: "^4.18.2", status: "up-to-date" },
                    { name: "lodash", version: "^4.17.21", status: "outdated" },
                    { name: "axios", version: "^1.4.0", status: "up-to-date" },
                  ].map((dep, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <div className="font-medium">{dep.name}</div>
                          <div className="text-sm text-muted-foreground">{dep.version}</div>
                        </div>
                        <Badge variant={dep.status === "up-to-date" ? "default" : "secondary"}>
                          {dep.status === "up-to-date" ? "Up to date" : "Outdated"}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documentation" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Generated Documentation Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="text-primary font-bold"># Project Documentation</div>
                      <div className="mt-2">
                        ## Overview
                        <br />
                        This project is a modern web application built with React and Express...
                      </div>
                      <div className="mt-2">
                        ## API Endpoints
                        <br />- `GET /api/users` - Retrieves user data
                        <br />- `POST /api/payment` - Processes payment transactions...
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button>
                        <GitBranch className="w-4 h-4 mr-2" />
                        Create Pull Request
                      </Button>
                      <Button variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Download Docs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
