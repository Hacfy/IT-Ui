import { RoleType } from "../user.type";

export interface userStore {
  user: { user_id: string; user_email: string; user_type: RoleType };
}
