import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlertService } from '../alert-module/alert.service';
import { ALERT_TYPE } from '../alert-module/alert.interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(@Inject(AlertService) private alertService: AlertService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse): Observable<any> => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.alertService.setAlertConfig({
            status: true,
            type: ALERT_TYPE.DANGER,
            message: `Упс, щось трапилося! ${errorMessage}`
          });
          return throwError(error);
        })
      );
  }
}
