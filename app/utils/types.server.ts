export type RegisterForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type GetUserId = {
  id: string;
  email: string;
  profile?: {
    firstName: string;
    lastName: string;
  } | null
}