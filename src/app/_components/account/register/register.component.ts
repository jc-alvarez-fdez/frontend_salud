import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../../../_interfaces/paciente.interface';
import { ErrorService } from '../../../_services/error.service';
import { AuthService } from '../../../_services/auth.service';

import { SpinnerComponent } from '../../../_shared/spinner/spinner.component';



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
export class RegisterComponent {
  form: any = {
    nombre: null,
    apellidos: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private _authService: AuthService) { }

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
