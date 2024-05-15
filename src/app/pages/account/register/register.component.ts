import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../../core/interfaces/paciente.interface';
import { ErrorService } from '../../../core/services/error.service';
import { AuthService } from '../../../core/services/auth.service';

import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { StorageService } from '../../../core/services/storage.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SpinnerComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  loading = false;

  formulario: FormGroup;

  constructor (
    private _authService: AuthService,
    private _storageService: StorageService
    ) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),

    })
  }


  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];


    ngOnInit(): void {
      if (this._storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this._storageService.getUser().roles;
      }
    }

    async onSubmit() {
    const response = await this._authService.register(this.formulario.value);
    console.log(response);


  //   .subscribe({
  //      this._authService.register(this.)
  //     : data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isRegisterFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isRegisterFailed = true;
  //     }
  //   });
  }
}



/* Anterior

import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../../core/interfaces/paciente.interface';
import { ErrorService } from '../../../core/services/error.service';
import { AuthService } from '../../../core/services/auth.service';

import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { StorageService } from '../../../core/services/storage.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SpinnerComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  loading = false;

  form: any = {
    nombre: null,
    apellidos: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(
    private _authService: AuthService,
    private _storageService: StorageService) { }

    ngOnInit(): void {
      if (this._storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this._storageService.getUser().roles;
      }
    }

  onSubmit(): void {
    const { nombre, apellidos, email, password } = this.form;

    this._authService.register(nombre, apellidos, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isRegisterFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    });
  }
}
*/
