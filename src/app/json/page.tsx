import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function JsonPage() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>JSON Tools</CardTitle>
          <CardDescription>A collection of tools for working with JSON data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy
            for humans to read and write and easy for machines to parse and generate.
          </p>
          <p>Available tools:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/json/compare" className="text-primary hover:underline">
                Compare
              </Link>{' '}
              - Find differences between two JSON objects
            </li>
            <li>
              <Link href="/json/format" className="text-primary hover:underline">
                Format & Validate
              </Link>{' '}
              - Pretty print and validate your JSON data
            </li>
            <li>
              <Link href="/json/minify" className="text-primary hover:underline">
                Minify
              </Link>{' '}
              - Remove unnecessary whitespace from your JSON
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
