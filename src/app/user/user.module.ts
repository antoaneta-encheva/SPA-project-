import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from "./user/user.component";
import {UserRoutingModule} from "./user-routing.module";
import {FormComponent} from "./form/form.component";
import {MainUserComponent} from "./main-user/main-user.component";



@NgModule(
  {
    declarations:[UserComponent,
    FormComponent,
    MainUserComponent],
    imports:[CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      UserRoutingModule
    ]
  }
)

export class userModule{

}
