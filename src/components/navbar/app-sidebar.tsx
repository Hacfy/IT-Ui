"use client";

import { NavMain } from "@/components/navbar/nav-main";
import { NavUser } from "@/components/navbar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  super_admin,
  branch_head,
  department_head,
  warehouse_users,
} from "@/lib/RbacManagement/navbarMangement";
import { RootState } from "@/store/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const userRole : string | null = useSelector((state: RootState) => state.user.user_type);
  const userRole: string | null = "branch_head";

  const User = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
  };

  const navSource = useMemo(() => {
    if (!userRole) return [];
    switch (userRole) {
      case "super_admin":
        return super_admin.navMain;
      case "branch_head":
        return branch_head.navMain;
      case "department_head":
        return department_head.navMain;
      case "warehouse_head":
        return warehouse_users.navMain;
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
