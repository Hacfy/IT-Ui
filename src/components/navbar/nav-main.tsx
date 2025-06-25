"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      items?: {
        title: string;
        url: string;
      }[];
    }[];
  }[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <Link href={item.url}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <span>
                    <item.icon />
                    <span>{item.title}</span>
                  </span>
                </SidebarMenuButton>
              </Link>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <Collapsible
                          key={subItem.title}
                          asChild
                          defaultOpen={false}
                        >
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <div
                                onClick={() => {
                                  if (pathname !== subItem.url) {
                                    console.log(pathname,subItem.url)
                                    router.replace(subItem.url);
                                  }
                                }}
                              >
                                {subItem.title}
                              </div>
                            </SidebarMenuSubButton>
                            {subItem.items?.length ? (
                              <>
                                <CollapsibleTrigger asChild>
                                  <SidebarMenuAction className="data-[state=open]:rotate-90">
                                    <ChevronRight />
                                    <span className="sr-only">Toggle</span>
                                  </SidebarMenuAction>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <SidebarMenuSub>
                                    {subItem.items.map((nestedItem) => (
                                      <SidebarMenuSubItem
                                        key={nestedItem.title}
                                      >
                                        <SidebarMenuSubButton asChild>
                                          <a href={nestedItem.url}>
                                            <span>{nestedItem.title}</span>
                                          </a>
                                        </SidebarMenuSubButton>
                                      </SidebarMenuSubItem>
                                    ))}
                                  </SidebarMenuSub>
                                </CollapsibleContent>
                              </>
                            ) : null}
                          </SidebarMenuSubItem>
                        </Collapsible>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
