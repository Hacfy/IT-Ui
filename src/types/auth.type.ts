export interface updatePassword {
  id: string;
  email: string;
  old_password: string;
  new_password: string;
}

export interface login {
  email: string;
  password: string;
}
