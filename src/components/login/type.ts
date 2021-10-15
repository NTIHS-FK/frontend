export interface InputError {
  name: boolean,
  email: boolean,
  password: boolean
};

export interface UserFormData {
  usernameOrEmail: string,
  password: string
}
