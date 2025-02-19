'use client'

import * as React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { GalleryVerticalEnd } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'

// Utility function for consistent sorting
const sortByTitle = <T extends { title: string }>(a: T, b: T) => a.title.localeCompare(b.title)

const data = {
  navMain: [
    {
      title: 'Base64',
      url: '/base64',
      items: [
        {
          title: 'Decode',
          url: '/base64/decode',
        },
        {
          title: 'Encode',
          url: '/base64/encode',
        },
      ].sort(sortByTitle),
    },
    {
      title: 'Case Converter',
      url: '/convert-case',
      description: 'Convert between different case styles',
    },
    {
      title: 'Character Counter',
      url: '/character-counter',
      description: 'Count characters, words, lines, and more',
    },
    {
      title: 'Hash',
      url: '/hash',
      items: [
        {
          title: 'MD5',
          url: '/hash/md5',
        },
        {
          title: 'SHA-1',
          url: '/hash/sha1',
        },
        {
          title: 'SHA-256',
          url: '/hash/sha256',
        },
        {
          title: 'SHA-512',
          url: '/hash/sha512',
        },
      ].sort(sortByTitle),
    },
    {
      title: 'JSON',
      url: '/json',
      items: [
        {
          title: 'Compare',
          url: '/json/compare',
        },
        {
          title: 'Format & Validate',
          url: '/json/format',
        },
        {
          title: 'Minify',
          url: '/json/minify',
        },
      ].sort(sortByTitle),
    },
    {
      title: 'Markdown Editor',
      url: '/markdown',
      description: 'Edit and preview markdown content in real-time',
    },
    {
      title: 'URL',
      url: '/url',
      items: [
        {
          title: 'Decode',
          url: '/url/decode',
        },
        {
          title: 'Encode',
          url: '/url/encode',
        },
      ].sort(sortByTitle),
    },
  ].sort(sortByTitle),
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Swiss Army Knives</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={pathname === item.url}>
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={pathname === item.url}>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
