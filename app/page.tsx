"use client"

import type React from "react"

import { useState } from "react"
import { Monitor, Smartphone, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ResponsiveTester() {
  const [url, setUrl] = useState("")
  const [inputUrl, setInputUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [customWidth, setCustomWidth] = useState(375)
  const [customHeight, setCustomHeight] = useState(667)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Add https:// if not present
    let formattedUrl = inputUrl
    if (formattedUrl && !formattedUrl.startsWith("http")) {
      formattedUrl = `https://${formattedUrl}`
    }

    setUrl(formattedUrl)
    setTimeout(() => setIsLoading(false), 500)
  }

  const devicePresets = {
    mobile: { width: 375, height: 667, icon: Smartphone },
    tablet: { width: 768, height: 1024, icon: Tablet },
    desktop: { width: 1440, height: 900, icon: Monitor },
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Responsive Website Tester</CardTitle>
          <CardDescription>Check how your website looks on different screen sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter website URL (e.g., example.com)"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" disabled={!inputUrl}>
              Test Responsiveness
            </Button>
          </form>
        </CardContent>
      </Card>

      {url && (
        <Tabs defaultValue="mobile" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Mobile</span>
              </TabsTrigger>
              <TabsTrigger value="tablet" className="flex items-center gap-2">
                <Tablet className="h-4 w-4" />
                <span className="hidden sm:inline">Tablet</span>
              </TabsTrigger>
              <TabsTrigger value="desktop" className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span className="hidden sm:inline">Desktop</span>
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex items-center gap-2">
                <span>Custom</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(devicePresets).map(([device, preset]) => (
            <TabsContent key={device} value={device} className="mt-0">
              <div className="flex flex-col items-center">
                <div className="text-sm text-muted-foreground mb-2">
                  {preset.width} × {preset.height}px
                </div>
                <div
                  className="border rounded-lg overflow-hidden bg-background"
                  style={{
                    width: `${preset.width}px`,
                    height: `${preset.height}px`,
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    transform: preset.width > 768 ? "scale(0.8)" : "none",
                    transformOrigin: "top center",
                  }}
                >
                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <iframe
                      src={url}
                      title={`${device} view of ${url}`}
                      className="w-full h-full border-0"
                      sandbox="allow-same-origin allow-scripts"
                    />
                  )}
                </div>
              </div>
            </TabsContent>
          ))}

          <TabsContent value="custom" className="mt-0">
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 mb-4 w-full max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="width">Width (px)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    min={320}
                    max={2560}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (px)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    min={320}
                    max={1440}
                  />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                {customWidth} × {customHeight}px
              </div>
              <div
                className="border rounded-lg overflow-hidden bg-background"
                style={{
                  width: `${customWidth}px`,
                  height: `${customHeight}px`,
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  transform: customWidth > 768 ? "scale(0.8)" : "none",
                  transformOrigin: "top center",
                }}
              >
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <iframe
                    src={url}
                    title={`Custom view of ${url}`}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts"
                  />
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      )}

      {!url && (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <Monitor className="h-16 w-16 mb-4 text-muted-foreground" />
          <h3 className="text-xl font-medium mb-2">Enter a URL to get started</h3>
          <p className="text-muted-foreground max-w-md">
            Enter any website URL above to see how it looks on different devices and screen sizes
          </p>
        </div>
      )}
    </div>
  )
}

