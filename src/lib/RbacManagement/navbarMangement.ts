import { Bot, Settings, Settings2, SquareTerminal } from "lucide-react";

export const super_admin = {
  navMain: [
    {
      title: "Branch Management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Manage Heads",
          url: "#",
          items: [
            {
              title: "View Dep_Heads",
              url: "/home/viewAllHeads",
            },
            {
              title: "View Branch_Heads",
              url: "/home/viewAllHeads",
            },
            
          ],
        },
        {
          title: "Manage Department",
          url: "#",
          items: [
            {
              title: "View All Department",
              url: "/home/viewAllDepartment",
            },
          ],
        },
        {
          title: "Manage Workspace",
          url: "#",
          items: [
            {
              title: "View Workspaces",
              url: "/home/viewAllWorkspace",
            },
          ],
        },
      ],
    },
    {
      title: "Manage Warehouse",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Manage Warehouse",
          url: "#",
          items: [
            {
              title: "View Warehouses",
              url: "/home/viewAllWarehosue",
            },
          ],
        },
      ],
    },
    {
      title: "Change Branch",
      url: "/selectBranch",
      icon: Settings2,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,

      items: [
        {
          title: "Update Profile",
          url: "#",
        },
        {
          title: "Update Password",
          url: "#",
        },
      ],
    },
  ],
};

export const branch_head = {
  navMain: [
    {
      title: "Branch Management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Manage Heads",
          url: "#",
          items: [
            {
              title: "Create Heads",
              url: "/home/createHead",
            },
            {
              title: "View All Heads",
              url: "/home/viewAllHeads",
            },
          ],
        },
        {
          title: "Manage Department",
          url: "#",
          items: [
            {
              title: "Create Department",
              url: "/home/createDepartment",
            },
            {
              title: "View All Department",
              url: "/home/viewAllDepartment",
            },
          ],
        },
        {
          title: "Manage Workspace",
          url: "#",
          items: [
            {
              title: "View Workspaces",
              url: "/home/viewAllWorkspace",
            },
          ],
        },
      ],
    },
    {
      title: "Manage Warehouse",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Manage Warehouse",
          url: "#",
          items: [
            {
              title: "Create Warehouse",
              url: "/home/createWarehosue",
            },
            {
              title: "View Warehouses",
              url: "/home/viewAllWarehosue",
            },
          ],
        },
        {
          title: "View Components",
          url: "/home/viewAllComponent",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,

      items: [
        {
          title: "Update Profile",
          url: "#",
        },
        {
          title: "Update Password",
          url: "#",
        },
      ],
    },
  ],
};

export const department_head = {
  navMain: [
    {
      title: "Department Management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Manage Workspace",
          url: "#",
          items: [
            {
              title: "Create Workspaces",
              url: "/home/createWorkspace",
            },
            {
              title: "View Workspaces",
              url: "/home/viewAllWorkspace",
            },
          ],
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Update Profile",
          url: "#",
        },
        {
          title: "Update Password",
          url: "#",
        },
      ],
    },
  ],
};

export const warehouse_head = {
  navMain: [
    {
      title: "Manage Warehouse",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Manage Warehouse",
          url: "#",
          items: [
            {
              title: "View Warehouses",
              url: "/home/viewAllWarehosue",
            },
          ],
        },
        {
          title: "View Components",
          url: "#",
          items: [
            {
              title: "Add Component",
              url: "/home/createWarehosue",
            },
            {
              title: "View Component",
              url: "/home/viewAllComponents",
            },
          ],
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,

      items: [
        {
          title: "Update Profile",
          url: "#",
        },
        {
          title: "Update Password",
          url: "#",
        },
      ],
    },
  ],
};
