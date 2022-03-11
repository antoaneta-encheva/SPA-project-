import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations:[
    LoginComponent,
    AuthComponent],
  imports:[
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule]
})

export class AuthModule{

}
