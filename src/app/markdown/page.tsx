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
          <style jsx global>{`
            .w-md-editor-preview ul {
              list-style-type: disc;
              padding-left: 2em;
            }
            .w-md-editor-preview ol {
              list-style-type: decimal;
              padding-left: 2em;
            }
            .w-md-editor-preview blockquote {
              border-left: 4px solid #ddd;
              padding-left: 1em;
              margin: 1em 0;
              color: #666;
            }
            .w-md-editor-preview code {
              background-color: #f5f5f5;
              padding: 0.2em 0.4em;
              border-radius: 3px;
              font-family: monospace;
            }
            .w-md-editor-preview pre {
              background-color: #f5f5f5;
              padding: 1em;
              border-radius: 5px;
              overflow-x: auto;
            }
            .w-md-editor-preview table {
              border-collapse: collapse;
              width: 100%;
              margin: 1em 0;
            }
            .w-md-editor-preview th,
            .w-md-editor-preview td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            .w-md-editor-preview th {
              background-color: #f5f5f5;
            }
            .w-md-editor-preview hr {
              border: none;
              border-top: 1px solid #ddd;
              margin: 1em 0;
            }
            .w-md-editor-preview img {
              max-width: 100%;
              height: auto;
            }
          `}</style>
        </CardContent>
      </Card>
    </div>
  )
}
