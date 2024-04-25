import { Routes } from '@angular/router';

// Componentes
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { HomeComponent } from './pages/home/home.component';
import { MisMedicamentosComponent } from './pages/mis-medicamentos/mis-medicamentos.component';
import { AuthGuard } from './core/utils/auth.guard';
import { AdministracionesComponent } from './pages//administraciones/administraciones.component';
import { ProfileComponent } from './pages//account/profile/profile.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { MedicamentoVerComponent } from './pages/medicamentos/medicamento-ver/medicamento-ver.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },


  { path: 'obten_medicamentos',  component: MedicamentosComponent },
  { path: 'ver_medicamento', component: MedicamentoVerComponent},
  { path: 'mis_medicamentos',  component: MisMedicamentosComponent },
  { path: 'administraciones', component: AdministracionesComponent},

  { path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
  }
];



