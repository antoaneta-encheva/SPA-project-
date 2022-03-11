import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {AdItemComponent} from "./ad-item/ad-item.component";
import {AdsComponent} from "./ads/ads.component";
import {FormsComponent} from "./forms/forms.component";
import {AppliedAdsComponent} from "./applied-ads/applied-ads.component";
import {ApplicantComponent} from "./applicant/applicant.component";

@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  MainRoutingModule,],
  declarations:[
    MainComponent,
  AdItemComponent,
  AdsComponent,
  FormsComponent,
  AppliedAdsComponent,
  ApplicantComponent]
})

export class MainModule{

}
