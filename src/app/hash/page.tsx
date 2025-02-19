import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HashPage() {
  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Text Hasher</CardTitle>
          <CardDescription>A tool to hash text using common algorithms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Hashing is a one-way function that converts text into a fixed-size string of characters.
            It&apos;s commonly used for password storage, data integrity verification, and digital
            signatures.
          </p>
          <p>Common use cases include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Password hashing</li>
            <li>File integrity verification</li>
            <li>Digital signatures</li>
            <li>Data deduplication</li>
          </ul>
          <div className="grid gap-4 pt-4 md:grid-cols-2">
            <Link
              href="/hash/md5"
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            >
              <div className="space-y-1">
                <h3 className="font-medium">MD5</h3>
                <p className="text-sm text-muted-foreground">
                  128-bit hash function (not cryptographically secure)
                </p>
              </div>
            </Link>
            <Link
              href="/hash/sha1"
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            >
              <div className="space-y-1">
                <h3 className="font-medium">SHA-1</h3>
                <p className="text-sm text-muted-foreground">
                  160-bit hash function (legacy algorithm)
                </p>
              </div>
            </Link>
            <Link
              href="/hash/sha256"
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            >
              <div className="space-y-1">
                <h3 className="font-medium">SHA-256</h3>
                <p className="text-sm text-muted-foreground">256-bit secure hash function</p>
              </div>
            </Link>
            <Link
              href="/hash/sha512"
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            >
              <div className="space-y-1">
                <h3 className="font-medium">SHA-512</h3>
                <p className="text-sm text-muted-foreground">512-bit secure hash function</p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
