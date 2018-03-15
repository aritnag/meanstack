import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LogoutComponent } from "./logout.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { AuthService } from "./auth.service";
import { authRouting } from "./auth.routing";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LogoutComponent,
                        SignupComponent,
                        SigninComponent,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        authRouting
                    ],
                    providers: [AuthService]
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = function () { return []; };
    return AuthModule;
}());
export { AuthModule };
