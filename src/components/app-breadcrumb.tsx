'use client'

import { Fragment } from 'react'

import { usePathname } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

export default function AppBreadcrumb() {
  const pathname = usePathname()
  const pathNames = pathname.split('/').filter((path) => path)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const isLast = index === pathNames.length - 1
          const formattedPath = path
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

          return (
            <Fragment key={path}>
              <BreadcrumbItem className="hidden md:block">
                {isLast ? (
                  <BreadcrumbPage>{formattedPath}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{formattedPath}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
