import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Base64Page() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Base64 Encoder/Decoder</CardTitle>
          <CardDescription>A simple tool to encode and decode Base64 strings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII
            string format by translating it into a radix-64 representation. It is commonly used when
            there is a need to encode binary data that needs to be stored and transferred over media
            that are designed to deal with text.
          </p>
          <p>Common use cases include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Encoding binary data in email attachments</li>
            <li>Embedding image data in web pages</li>
            <li>Storing complex data in JSON format</li>
            <li>URL-safe data encoding</li>
          </ul>
          <p className="pt-4">
            Learn more about Base64 on{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Base64"
              target="_blank"
              className="text-primary hover:underline"
            >
              Wikipedia
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
