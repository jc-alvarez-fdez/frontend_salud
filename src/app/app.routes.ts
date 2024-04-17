import { Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './_components/account/login/login.component';
import { RegisterComponent } from './_components/account/register/register.component';
import { MedicamentosComponent } from './_pages/medicamentos/medicamentos.component';
import { HomeComponent } from './_pages/home/home.component';
import { MisMedicamentosComponent } from './_pages/mis-medicamentos/mis-medicamentos.component';
import { AuthGuard } from './_utils/auth.guard';
import { AdministracionesComponent } from './_pages/administraciones/administraciones.component';
import { ProfileComponent } from './_components/account/profile/profile.component';
import { BoardAdminComponent } from './_components/board/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board/board-user/board-user.component';

export const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'obten_medicamentos',  component: MedicamentosComponent },
  { path: 'mis_medicamentos',  component: MisMedicamentosComponent },
  { path: 'administraciones', component: AdministracionesComponent},

  { path: '**',
  redirectTo: 'auth/login',
  pathMatch: 'full'
  }
];



