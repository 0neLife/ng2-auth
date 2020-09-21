import { ReqresHttpError } from './api-config';

export class UserAuthInfo {
  constructor(
    public email: string,
    public password: string
  ) {
    this.email = email;
    this.password = password;
  }
}

export interface UserAuthToken extends ReqresHttpError{
  token: string;
}
