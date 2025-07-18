export interface Login {
  homeTitle: string;
  user: string;
  password: string;
  failUser?: string;
  failPassword?: string;
  loginMessageIncorrect?: string;
}
