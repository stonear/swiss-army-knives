'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { parseJson } from '@/lib/json'

export default function JsonMinify() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    try {
      if (!value.trim()) {
        setOutput('')
        setError(null)
        return
      }

      const parsed = parseJson(value)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
      setOutput('')
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>JSON Minifier</CardTitle>
          <CardDescription>Minify your JSON data by removing whitespace</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input">Input JSON</Label>
            <Textarea
              id="input"
              placeholder="Paste your JSON here..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[200px] font-mono"
            />
          </div>
          {error && (
            <div className="rounded-md bg-destructive/15 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="output">Minified JSON</Label>
            <Textarea
              id="output"
              value={output}
              readOnly
              className="min-h-[200px] bg-muted font-mono"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
