import { UserAuthInfo, UserAuthToken } from './../../http/models/user-auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, of, Observable } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { ApiUserAuthService } from '../../http/api-user-auth.service';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  public isHidePassword = true;
  public isLoading = false;
  public loginForm: FormGroup;

  private unsubscribe$: Subject<void> = new Subject();

  public get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userStorageService: UserStorageService,
    private apiUserAuthService: ApiUserAuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['eve.holt@reqres.in',
        Validators.compose([
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          Validators.required]),
      ],
      password: ['cityslicka', Validators.required]
    },
      { updateOn: 'blur' }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

  public submitLoginForm(): void {
    if (!this.loginForm.valid || this.isLoading) {
      return;
    }

    const userAuthInfo: UserAuthInfo = new UserAuthInfo(
      this.email.value,
      this.password.value
    );

    this.isLoading = true;
    this.apiUserAuthService.userLogin(userAuthInfo)
      .pipe(
        catchError((): Observable<null> => of(null)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((userAuthToken: UserAuthToken): void => {
        this.isLoading = false;
        if (!userAuthInfo || userAuthToken.error) {
          return;
        }
        this.userStorageService.setToken(userAuthToken.token);
        this.router.navigate(['']);
      });
  }
}
