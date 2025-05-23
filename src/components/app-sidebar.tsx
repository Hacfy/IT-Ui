"use client";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { super_admin, branch_head, department_head, warehouse_head } from "@/lib/RbacManagement/navbarMangement";
import { useMemo } from "react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userRole: string = "super_admin";

  const User = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
  };

  const navSource = useMemo(() => {
    switch (userRole) {
      case "super_admin":
        return super_admin.navMain;
      case "branch_head":
        return branch_head.navMain;
      case "department_head":
        return department_head.navMain;
      case "warehouse_head":
        return warehouse_head.navMain;
      default:
        return [];
    }
  }, [userRole]);

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="grid text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-xl text-primary">
                    IT Inventory
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navSource} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={User.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
