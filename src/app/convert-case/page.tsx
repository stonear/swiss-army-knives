'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type CaseResult = {
  name: string
  value: string
  description: string
}

export default function ConvertCase() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<CaseResult[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    const convertedCases: CaseResult[] = [
      {
        name: 'camelCase',
        value: toCamelCase(value),
        description: 'Used for variable and function names in JavaScript, Java, etc.',
      },
      {
        name: 'PascalCase',
        value: toPascalCase(value),
        description: 'Used for class names in most programming languages',
      },
      {
        name: 'snake_case',
        value: toSnakeCase(value),
        description: 'Common in Python, Ruby, and SQL',
      },
      {
        name: 'kebab-case',
        value: toKebabCase(value),
        description: 'Used in URLs and CSS class names',
      },
      {
        name: 'CONSTANT_CASE',
        value: toConstantCase(value),
        description: 'Used for constants and environment variables',
      },
      {
        name: 'dot.case',
        value: toDotCase(value),
        description: 'Used in object properties and package names',
      },
      {
        name: 'Title Case',
        value: toTitleCase(value),
        description: 'Used for titles and headings',
      },
      {
        name: 'Sentence case',
        value: toSentenceCase(value),
        description: 'Used for normal text and descriptions',
      },
      {
        name: 'path/case',
        value: toPathCase(value),
        description: 'Used for file paths and URLs',
      },
    ]

    setResults(convertedCases)
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Case Converter</CardTitle>
          <CardDescription>
            Convert text between different case styles used in programming
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input">Input Text</Label>
            <Textarea
              id="input"
              placeholder="Type or paste text to convert..."
              value={input}
              onChange={handleInputChange}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-4">
            {results.map((result) => (
              <div key={result.name} className="space-y-2">
                <Label htmlFor={result.name}>
                  {result.name}
                  <span className="ml-2 text-sm text-muted-foreground">{result.description}</span>
                </Label>
                <Textarea
                  id={result.name}
                  value={result.value}
                  readOnly
                  className="min-h-[60px] bg-muted"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Case conversion utility functions
function toCamelCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
}

function toPascalCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toUpperCase())
}

function toSnakeCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s-]+/g, '_')
}

function toKebabCase(str: string): string {
  return str
    .trim()
    .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    .replace(/[-_\s.]+/g, '-')
    .replace(/^-/, '')
    .toLowerCase()
}

function toConstantCase(str: string): string {
  return toSnakeCase(str).toUpperCase()
}

function toDotCase(str: string): string {
  return str
    .trim()
    .replace(/[A-Z]/g, (letter) => `.${letter.toLowerCase()}`)
    .replace(/[-_\s.]+/g, '.')
    .replace(/^\./, '')
    .toLowerCase()
}

// New utility functions
function toTitleCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1))
}

function toSentenceCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/^\w|\.\s+\w/g, (letter) => letter.toUpperCase())
}

function toPathCase(str: string): string {
  return str
    .trim()
    .replace(/[A-Z]/g, (letter) => `/${letter.toLowerCase()}`)
    .replace(/[-_\s.]+/g, '/')
    .replace(/^\//, '')
    .toLowerCase()
}
