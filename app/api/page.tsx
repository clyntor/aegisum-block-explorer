import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, AlertTriangle, ExternalLink } from "lucide-react"

export default function APIPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl font-bold text-slate-100">Aegisum API</h1>
          </div>
          <p className="text-xl text-slate-300">Simple API endpoints for Aegisum blockchain data</p>
        </div>

        {/* Important Notice */}
        <Card className="border-amber-500 bg-amber-100 dark:bg-amber-900 dark:border-amber-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
              <AlertTriangle className="h-5 w-5" />
              Please Be Respectful
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-800 dark:text-amber-200">
            <p>
              Our API is free to use, but please don't spam it with excessive requests. We have rate limits in place to
              keep the service running smoothly for everyone.
            </p>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">Available Endpoints</h2>

          <div className="grid gap-4">
            {/* Current Supply */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-100">Current Supply</CardTitle>
                <CardDescription className="text-slate-300">Get the current circulating supply of AEGS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-slate-500 text-slate-200">
                    Plain Text
                  </Badge>
                  <a
                    href="https://explorer.aegisum.com/api/supply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1 break-all"
                  >
                    https://explorer.aegisum.com/api/supply
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1 text-slate-200">Example Output:</p>
                  <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-2 rounded text-sm">
                    19804000
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Max Supply */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-100">Maximum Supply</CardTitle>
                <CardDescription className="text-slate-300">
                  Get the maximum possible supply of AEGS (100M)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-slate-500 text-slate-200">
                    Plain Text
                  </Badge>
                  <a
                    href="https://explorer.aegisum.com/api/max-supply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1 break-all"
                  >
                    https://explorer.aegisum.com/api/max-supply
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1 text-slate-200">Example Output:</p>
                  <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-2 rounded text-sm">
                    100000000
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Price */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-100">Current Price</CardTitle>
                <CardDescription className="text-slate-300">Get the current AEGS price in USD</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-slate-500 text-slate-200">
                    Plain Text
                  </Badge>
                  <a
                    href="https://explorer.aegisum.com/api/price"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1 break-all"
                  >
                    https://explorer.aegisum.com/api/price
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1 text-slate-200">Example Output:</p>
                  <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-2 rounded text-sm">
                    0.00077000
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Market Cap */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-100">Market Cap</CardTitle>
                <CardDescription className="text-slate-300">
                  Get the current market capitalization in USD
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-slate-500 text-slate-200">
                    Plain Text
                  </Badge>
                  <a
                    href="https://explorer.aegisum.com/api/market-cap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1 break-all"
                  >
                    https://explorer.aegisum.com/api/market-cap
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1 text-slate-200">Example Output:</p>
                  <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-2 rounded text-sm">
                    15249.08
                  </code>
                </div>
              </CardContent>
            </Card>

            {/* Block Height */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-100">Block Height</CardTitle>
                <CardDescription className="text-slate-300">Get the current blockchain height</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-slate-500 text-slate-200">
                    Plain Text
                  </Badge>
                  <a
                    href="https://explorer.aegisum.com/api/block-height"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1 break-all"
                  >
                    https://explorer.aegisum.com/api/block-height
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1 text-slate-200">Example Output:</p>
                  <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-2 rounded text-sm">
                    34411
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="bg-slate-600" />

          {/* Summary Endpoint */}
          <Card className="bg-slate-800 border-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-400">Complete Summary</CardTitle>
              <CardDescription className="text-slate-300">
                Get all blockchain data in one JSON response with formatted values
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-900 text-blue-200 border-blue-600">
                  JSON
                </Badge>
                <a
                  href="https://explorer.aegisum.com/api/summary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-mono text-sm flex items-center gap-1 break-all"
                >
                  https://explorer.aegisum.com/api/summary
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </a>
              </div>
              <div>
                <p className="text-sm font-medium mb-1 text-slate-200">Example Output:</p>
                <pre className="bg-slate-900 border border-slate-600 text-slate-100 p-3 rounded text-xs overflow-x-auto">
                  {`{
  "blockHeight": { "value": 34411, "formatted": "34,411" },
  "currentSupply": { "value": 19804000, "formatted": "19,804,000" },
  "maxSupply": { "value": 100000000, "formatted": "100,000,000" },
  "price": { "value": 0.00077, "formatted": "$0.00077000" },
  "marketCap": { "value": 15249.08, "formatted": "$15,249.08" },
  "supplyPercentage": { "value": 19.804, "formatted": "19.80%" },
  "timestamp": "2025-06-29T18:28:36.792Z",
  "network": "Aegisum",
  "symbol": "AEGS"
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simple Usage */}
        <Card className="bg-slate-800 border-slate-600">
          <CardHeader>
            <CardTitle className="text-slate-100">How to Use</CardTitle>
            <CardDescription className="text-slate-300">Simple examples for getting started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2 text-slate-200">Get current price:</p>
              <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-3 rounded text-sm break-all">
                curl https://explorer.aegisum.com/api/price
              </code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2 text-slate-200">Get all data as JSON:</p>
              <code className="block bg-slate-900 border border-slate-600 text-slate-100 p-3 rounded text-sm break-all">
                curl https://explorer.aegisum.com/api/summary
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-slate-400">
          <p>
            Have an API request or don't see what you're looking for? Make a request to us at{" "}
            <a
              href="https://discord.gg/4E5caDKkeP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              discord.gg/4E5caDKkeP.
            </a>
	    Alternatively, contribute to the explorer by creating a Pull Request.
          </p>
        </div>
      </div>
    </div>
  )
}
