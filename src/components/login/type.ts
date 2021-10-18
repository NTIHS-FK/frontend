export interface InputError {
  name: boolean;
  email: boolean;
  password: boolean;
}

export interface UserFormData {
  usernameOrEmail: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface LoginFormData {
  nameOrEmail: string;
  password: string;
}
