import { NgModule } from '@angular/core';
import { AuthenticationRouterModule } from 'src/app/authentication/authentication-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationComponent } from 'src/app/authentication/registration/registration.component';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';


@NgModule ({
    declarations: [
        RegistrationComponent,
        LoginComponent,
    ],
    imports: [
        AuthenticationRouterModule,
        HttpClientModule,
        SharedModule
    ],
    bootstrap: [
        RegistrationComponent,
        LoginComponent,
    ],
    providers: [AuthService]
})

export class AuthenticationModule {}
