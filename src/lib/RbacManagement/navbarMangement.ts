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
              title: "View All Heads",
              url: "/home/viewAllHeads",
            },
          ],
        },
        {
          title: "View All Department",
          url: "/home/viewAllDepartment",
          // items: [
          //   {
          //     title: "View All Department",
          //     url: "/home/viewAllDepartment",
          //   },
          // ],
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
              url: "/home/createWarehouse",
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
          title: "Manage Components",
          url: "#",
          items: [
            {
              title: "Create Category",
              url: "/home/createCategory",
            },
            {
              title: "Create Unit",
              url: "/home/createUnit",
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
