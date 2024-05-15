import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  loading = false;


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private _authService: AuthService,
    private _storageService: StorageService
  ) {
    this.formulario = new FormGroup ({
      email: new FormControl(),
      password: new FormControl()
    });
    }

  ngOnInit(): void {
    if (this._storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this._storageService.getUser().roles;
    }
  }

/*  async onSubmit(): Promise<void> {
    const response = await this._authService.login(this.formulario.value);
    console.log(response);
  }
  */

  async onSubmit(): Promise<void> {
    try {
      const response = await this._authService.login(this.formulario.value);
      this._storageService.saveUser(response);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this._storageService.getUser().roles;
      this.reloadPage();
      console.log('logado');
    } catch (error: any) {
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
    }
  }


  reloadPage(): void {
    window.location.reload();
  }
}


/* Anterior

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  loading = false;

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private _authService: AuthService,
    private _storageService: StorageService) { }

  ngOnInit(): void {
    if (this._storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this._storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this._authService.login(email, password).subscribe({
      next: data => {
        this._storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this._storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}

*/
