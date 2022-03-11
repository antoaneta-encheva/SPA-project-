import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";

const routes:Routes=[
  {
    path:'auth',
    loadChildren: ()=>import ('./auth/auth.module')
                              .then(m=>m.AuthModule)
  },
  {
    path:'',
    loadChildren: ()=> import ('./main/main.module')
      .then(m=> m.MainModule),
    canLoad: [AuthGuard]
  },
  {
        path:'user',
    loadChildren:()=> import('./user/user.module')
      .then(m=>m.userModule)
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
