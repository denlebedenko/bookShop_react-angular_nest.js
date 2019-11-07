import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from 'src/app/authentication/registration/registration.component';
import { LoginComponent } from 'src/app/authentication/login/login.component';



const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthenticationRouterModule {}
