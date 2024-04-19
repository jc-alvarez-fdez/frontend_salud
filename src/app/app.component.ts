import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StorageService } from './core/services/storage.service';
import { AuthService } from './core/services/auth.service';

import { LoginComponent } from './pages/account/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddTokenInterceptor } from './core/utils/add-token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LoginComponent,
    NavbarComponent

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  email?: string;

  constructor (
    private _storageService: StorageService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this._storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this._storageService.getUser();
      // this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.email = user.email;
    }
  }

  logout(): void {
    this._authService.logout().subscribe({
      next: res => {
        console.log(res);
        this._storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
