'use client'

import * as React from 'react'

import dynamic from 'next/dynamic'

import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

export default function MarkdownPage() {
  const [markdown, setMarkdown] = React.useState('')

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Markdown Editor</CardTitle>
          <CardDescription>Edit and preview markdown content in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div data-color-mode="light">
            <MDEditor
              value={markdown}
              onChange={(value) => setMarkdown(value || '')}
              height={500}
              preview="live"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
