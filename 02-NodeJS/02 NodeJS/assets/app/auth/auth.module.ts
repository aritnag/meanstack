import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./authentication.component";
import { LogoutComponent } from "./logout.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { AuthService } from "./auth.service";
import { routing } from "../app.routing";
import { authRouting } from "./auth.routing";

@NgModule({
    declarations :[
        LogoutComponent,
        SignupComponent,
        SigninComponent,
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ],
    providers: [AuthService]

})
export class AuthModule{

}