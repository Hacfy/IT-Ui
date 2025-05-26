import { RoleType } from "./user.type";

export interface userToken {
  user_id: string;
  user_email: string;
  user_type: RoleType;
  user_name:string  
}

export interface componentToken {
  id: string;
  c_id: string;
  name: string;
  prefix: string;
}

export interface unitToken {
  id: string;
  u_id: string;
  status: string;
}

export interface branchToken {
  id: string;
  b_id: string;
  org_id: string;
  name: string;
  location: string;
}

