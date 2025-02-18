import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function UrlPage() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>URL Encoder/Decoder</CardTitle>
          <CardDescription>A simple tool to encode and decode URL strings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            URL encoding converts characters into a format that can be transmitted over the
            Internet. It replaces unsafe ASCII characters with a &ldquo;%&rdquo; followed by two
            hexadecimal digits. This is also known as percent-encoding.
          </p>
          <p>Common use cases include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Encoding special characters in URLs</li>
            <li>Handling query string parameters</li>
            <li>Making URLs safe for transmission</li>
            <li>Processing form data</li>
          </ul>
          <div className="grid gap-4 pt-4 md:grid-cols-2">
            <Link
              href="/url/encode"
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            >
              <div className="space-y-1">
                <h3 className="font-medium">URL Encode</h3>
                <p className="text-sm text-muted-foreground">Convert text to URL-safe format</p>
              </div>
            </Link>
            <Link
              href="/url/decode"
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            >
              <div className="space-y-1">
                <h3 className="font-medium">URL Decode</h3>
                <p className="text-sm text-muted-foreground">
                  Convert URL-encoded text back to normal
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
