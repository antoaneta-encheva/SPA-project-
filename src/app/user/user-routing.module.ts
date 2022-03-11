import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {FormComponent} from "./form/form.component";

const routes: Routes=[{
  path:'',
  component:MainUserComponent,
  children:[
    {
   path:'',
   pathMatch:'full',
   redirectTo:'profile'
  },
    {
      path:'profile',
      component:UserComponent
    },{
    path:'profile/edit',
      component:FormComponent
    }
  ]
}]

@NgModule(
  {
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  }
)

export class UserRoutingModule{

}
