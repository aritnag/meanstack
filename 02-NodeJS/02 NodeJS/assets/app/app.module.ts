import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';
import { MessageModule } from './messages/message.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,MessageModule
    ],
    providers: [AuthService,ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}