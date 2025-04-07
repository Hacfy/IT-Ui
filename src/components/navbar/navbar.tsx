'use client'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toaster } from "sonner"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"

export default function Navbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const pathSegments = pathname.split("/").filter(Boolean)

  const toTitleCase = (str: string) =>
    str
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())

  const buildHref = (index: number) =>
    "/" + pathSegments.slice(0, index + 1).join("/")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="w-full">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />

              <Breadcrumb>
                <BreadcrumbList >
                  {pathSegments.map((segment, index) => {
                    const href = buildHref(index)
                    const isLast = index === pathSegments.length - 1
                    return (
                      <React.Fragment key={href}>
                        {index > 0 && (
                          <BreadcrumbSeparator className="hidden md:block" />
                        )}
                        <BreadcrumbItem
                          className={isLast ? "" : "hidden md:block"}
                        >
                          {isLast ? (
                            <BreadcrumbPage >{toTitleCase(segment)}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild >
                              <Link href={href}>{toTitleCase(segment)}</Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    )
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <main className="p-4">{children}</main>
          <Toaster />
        </div>
      </div>
    </SidebarProvider>
  )
}
