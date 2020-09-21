export enum REQRES_API_CONFIG {
  ROOT = 'https://reqres.in/api'
}

export enum API_ACTIONS_AUTH {
  LOGIN = 'login',
}

export interface ReqresHttpError {
  error?: string;
}
