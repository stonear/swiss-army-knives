'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Base64Encode() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    try {
      const encoded = btoa(value)
      setOutput(encoded)
    } catch (error) {
      setOutput(
        `Invalid input for Base64 encoding: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Base64 Encode</CardTitle>
          <CardDescription>Convert your text to Base64 encoded string</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input">Input</Label>
            <Textarea
              id="input"
              placeholder="Type or paste text to encode..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="output">Output</Label>
            <Textarea id="output" value={output} readOnly className="min-h-[100px] bg-muted" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
