'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Base64Decode() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    try {
      const decoded = atob(value)
      setOutput(decoded)
    } catch (error) {
      setOutput(`Invalid Base64 input: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Base64 Decode</CardTitle>
          <CardDescription>Convert Base64 encoded string back to text</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input">Input</Label>
            <Textarea
              id="input"
              placeholder="Paste Base64 encoded text to decode..."
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
