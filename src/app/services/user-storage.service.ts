import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private _token: string;

  public get token(): string {
    return this._token;
  }

  constructor() { }

  public setToken(newToken: string): void {
    this._token = newToken;
  }

}
