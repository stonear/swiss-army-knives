'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function SHA256Hash() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    try {
      const encoder = new TextEncoder()
      const data = encoder.encode(value)
      crypto.subtle.digest('SHA-256', data).then((hash) => {
        const hashArray = Array.from(new Uint8Array(hash))
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
        setOutput(hashHex)
      })
    } catch (error) {
      setOutput(
        `Error generating SHA-256 hash: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>SHA-256 Hash</CardTitle>
          <CardDescription>Generate SHA-256 hash from text input</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input">Input</Label>
            <Textarea
              id="input"
              placeholder="Type or paste text to hash..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="output">Output (SHA-256 Hash)</Label>
            <Textarea
              id="output"
              value={output}
              readOnly
              className="min-h-[100px] bg-muted font-mono"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
