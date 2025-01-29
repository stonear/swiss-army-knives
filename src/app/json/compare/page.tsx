'use client'

import { useState } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { parseJson } from '@/lib/json'

type JsonValue = string | number | boolean | null | JsonObject | JsonArray
type JsonObject = { [key: string]: JsonValue }
type JsonArray = JsonValue[]

type Difference = {
  path: string
  left: JsonValue | undefined
  right: JsonValue | undefined
}

export default function JsonCompare() {
  const [leftInput, setLeftInput] = useState('')
  const [rightInput, setRightInput] = useState('')
  const [differences, setDifferences] = useState<Difference[]>([])
  const [error, setError] = useState<string | null>(null)

  const compareObjects = (obj1: JsonValue, obj2: JsonValue, path = ''): Difference[] => {
    const diffs: Difference[] = []

    // Handle non-object types
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      if (obj1 !== obj2) {
        diffs.push({ path, left: obj1, right: obj2 })
      }
      return diffs
    }

    // Handle arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      const maxLength = Math.max(obj1.length, obj2.length)
      for (let i = 0; i < maxLength; i++) {
        const currentPath = `${path}[${i}]`
        if (i >= obj1.length) {
          diffs.push({ path: currentPath, left: undefined, right: obj2[i] })
        } else if (i >= obj2.length) {
          diffs.push({ path: currentPath, left: obj1[i], right: undefined })
        } else {
          diffs.push(...compareObjects(obj1[i], obj2[i], currentPath))
        }
      }
      return diffs
    }

    // Handle objects
    if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
      const obj1Keys = Object.keys(obj1 as JsonObject)
      const obj2Keys = Object.keys(obj2 as JsonObject)

      // Check properties in obj1
      for (const key of obj1Keys) {
        const currentPath = path ? `${path}.${key}` : key
        if (!(key in (obj2 as JsonObject))) {
          diffs.push({ path: currentPath, left: (obj1 as JsonObject)[key], right: undefined })
        } else {
          diffs.push(
            ...compareObjects((obj1 as JsonObject)[key], (obj2 as JsonObject)[key], currentPath)
          )
        }
      }

      // Check for properties in obj2 that aren't in obj1
      for (const key of obj2Keys) {
        const currentPath = path ? `${path}.${key}` : key
        if (!(key in (obj1 as JsonObject))) {
          diffs.push({ path: currentPath, left: undefined, right: (obj2 as JsonObject)[key] })
        }
      }
    }

    return diffs
  }

  const handleCompare = () => {
    try {
      const left = parseJson(leftInput) as JsonValue
      const right = parseJson(rightInput) as JsonValue
      const diffs = compareObjects(left, right)
      setDifferences(diffs)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
      setDifferences([])
    }
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>JSON Compare</CardTitle>
          <CardDescription>Compare two JSON objects and find differences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="left">First JSON</Label>
              <Textarea
                id="left"
                placeholder="Paste your first JSON here..."
                value={leftInput}
                onChange={(e) => setLeftInput(e.target.value)}
                className="min-h-[200px] font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="right">Second JSON</Label>
              <Textarea
                id="right"
                placeholder="Paste your second JSON here..."
                value={rightInput}
                onChange={(e) => setRightInput(e.target.value)}
                className="min-h-[200px] font-mono"
              />
            </div>
          </div>
          <button
            onClick={handleCompare}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Compare
          </button>
          {error && (
            <div className="rounded-md bg-destructive/15 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}
          {differences.length > 0 && (
            <div className="space-y-2">
              <Label>Differences Found ({differences.length})</Label>
              <div className="rounded-md border p-4">
                <pre className="whitespace-pre-wrap text-sm">
                  {differences.map((diff, index) => (
                    <div key={index} className="mb-2">
                      <strong>Path: {diff.path}</strong>
                      <br />
                      Left: {JSON.stringify(diff.left)}
                      <br />
                      Right: {JSON.stringify(diff.right)}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
