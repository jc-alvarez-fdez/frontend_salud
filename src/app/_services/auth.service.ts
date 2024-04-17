import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Paciente } from '../_interfaces/paciente.interface';
import { environment } from '../../environments/environment';

const AUTH_API: string = `${environment.endpoint}auth/`
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    login(email: string, password: string): Observable<any> {
      return this.http.post(
        AUTH_API + 'login',
        {
          email,
          password,
        },
        httpOptions
      );
    }

    register(nombre: string, apellidos: string, email: string, password: string): Observable<any> {
      return this.http.post(
        AUTH_API + 'register',
        {
          nombre,
          apellidos,
          email,
          password,
        },
        httpOptions
      );
    }

    logout(): Observable<any> {
      return this.http.post(AUTH_API + 'logout', { }, httpOptions);
    }

}





