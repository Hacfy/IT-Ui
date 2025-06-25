import { Bot, Settings, Settings2, SquareTerminal } from "lucide-react";

export const super_admin = {
  navMain: [
    {
      title: "Branch Management",
      url: "/home",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "View All Department",
          url: "/home/viewAllDepartment",
        },
        {
          title: "View All Workspace",
          url: "/home/viewAllWorkspace",
        },
        {
          title: "View  Warehouse",
          url: "/home/viewWarehouse",
        },
      ],
    },
    // {
    //   title: "Manage Warehouse",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Manage Warehouse",
    //       url: "#",
    //       items: [
    //         {
    //           title: "View Warehouses",
    //           url: "/home/viewAllWarehosue",
    //         },
    //       ],
    //     },
    //   ],
    // },
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
        // {
        //   title: "Manage Heads",
        //   url: "#",
        //   items: [
        //     {
        //       title: "View All Heads",
        //       url: "/home/viewAllHeads",
        //     },
        //   ],
        // },
        {
          title: "Manage Department",
          url: "#",
          items: [
            {
              title: "View All Department",
              url: "/home/viewAllDepartment",
            },
            {
              title: "Create Department",
              url: "/home/createDepartment",
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
          title: "Create Warehouse",
          url: "/home/createWarehouse",
        },
        {
          title: "View Warehouses",
          url: "/home/viewWarehouse",
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
            {
              title: "Add Components",
              url: "/home/createComponents",
            },
            {
              title: "Raise Issue",
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
          title: "View Warehouse",
          url: "/home",
        },
        {
          title: "Create Components",
          url: "/home/createComponents",
        },
        {
          title: "Create Warehouse",
          url: "/home/createWarehouse",
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
