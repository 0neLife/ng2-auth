import {Injectable} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UserStorageService } from './user-storage.service';


@Injectable()
export class AuthGuardService implements CanActivate  {
  constructor(
    private router: Router,
    private userStorageService: UserStorageService,
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.userStorageService.token && (state.url === '/' || state.url !== '/login')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
