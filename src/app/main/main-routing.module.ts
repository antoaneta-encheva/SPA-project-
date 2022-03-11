import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {AdsComponent} from "./ads/ads.component";
import {FormsComponent} from "./forms/forms.component";
import {AppliedAdsComponent} from "./applied-ads/applied-ads.component";
import {AclGuard} from "../guards/acl.guard";
import {ApplicantComponent} from "./applicant/applicant.component";

const routes: Routes=[
  {
    path: '',
    component:MainComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'ads'
      },
      {
        path:'ads',
        component:AdsComponent
      },
      {
      path:'ads/create',
        component:FormsComponent,
        canActivate:[AclGuard]
      },
      {
      path:'ads/edit/:id',
        component:FormsComponent,
        canActivate:[AclGuard]
      },
      {
        path:'ads/applied',
        component:AppliedAdsComponent
      },
      {
      path:'ads/applicants/:id',
        component:ApplicantComponent,
        canActivate:[AclGuard]
      }
    ]
  }

];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class MainRoutingModule{

}
