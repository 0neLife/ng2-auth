import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REQRES_API_CONFIG, API_ACTIONS_AUTH } from './models/api-config';
import { UserAuthInfo, UserAuthToken } from './models/user-auth';

@Injectable({
  providedIn: 'root'
})
export class ApiUserAuthService {

  constructor(private http: HttpClient) { }

  public userLogin(userLoginInfo: UserAuthInfo): Observable<UserAuthToken> {
    return this.http.post(`${REQRES_API_CONFIG.ROOT}/${API_ACTIONS_AUTH.LOGIN}`, userLoginInfo) as Observable<UserAuthToken>;
  }
}
