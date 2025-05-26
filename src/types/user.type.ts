export type  RoleType = "super_admin" | "branch_head" | "department_head" | "warehouse_head"

export interface superAdmin {
  id?: string;
  u_id?: number;
  name: string;
  email: string;
  phone_number?: string;
  password: string;
}

export interface userL0 {
  id?: string;
  u_id?: number;
  name: string;
  email: string;
  phone_number?: string;
  password: string;
  branch_id?: number;
  warehouse_id?: number;
}

export interface userL1 {
  id?: string;
  u_id?: number;
  name: string;
  email: string;
  phone_number?: string;
  password: string;
  branch_id?: number;
}

export interface userL2 {
  id?: string;
  u_id?: number;
  name: string;
  email: string;
  phone_number?: string;
  password: string;
  branch_id?: number;
  department_id: number;
  department_name: string;
  issues:string | null;
  workspaces?:string | null;
}

export interface updateUser {
  id: string;
  name?: string;
  email?: string;
  phone_number?: string;
}

export interface deleteUser {
  email: string;
  id: string;
  user_Type: string;
  password: string;
}


