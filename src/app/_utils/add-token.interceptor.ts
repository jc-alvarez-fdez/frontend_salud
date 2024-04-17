
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
//import { Router } from '@angular/router';
//import { ErrorService } from '../_services/error.service';
//import { PacienteService } from '../_services/paciente.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(
    //private router: Router,
    //private _errorService: ErrorService,
    //private _pacienteService: PacienteService
  ) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req);
  }
}

 export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
];


