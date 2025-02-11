'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type CountStats = {
  characters: number
  charactersNoSpaces: number
  words: number
  lines: number
  spaces: number
  paragraphs: number
}

export default function CharacterCounter() {
  const [input, setInput] = useState('')
  const [stats, setStats] = useState<CountStats>({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    lines: 0,
    spaces: 0,
    paragraphs: 0,
  })

  const calculateStats = (text: string): CountStats => {
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const lines = text ? text.split('\n').length : 0
    const spaces = text.split(' ').length - 1
    const paragraphs = text ? text.split('\n\n').filter((para) => para.trim().length > 0).length : 0

    return {
      characters,
      charactersNoSpaces,
      words,
      lines,
      spaces,
      paragraphs,
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)
    setStats(calculateStats(value))
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Character Counter</CardTitle>
          <CardDescription>Count characters, words, lines, and more in your text</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input">Input Text</Label>
            <Textarea
              id="input"
              placeholder="Type or paste your text here..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[200px]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{stats.characters}</div>
              <div className="text-sm text-muted-foreground">Characters</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{stats.charactersNoSpaces}</div>
              <div className="text-sm text-muted-foreground">Characters (no spaces)</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{stats.words}</div>
              <div className="text-sm text-muted-foreground">Words</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{stats.lines}</div>
              <div className="text-sm text-muted-foreground">Lines</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{stats.spaces}</div>
              <div className="text-sm text-muted-foreground">Spaces</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{stats.paragraphs}</div>
              <div className="text-sm text-muted-foreground">Paragraphs</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
