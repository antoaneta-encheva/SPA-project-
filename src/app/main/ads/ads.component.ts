import { Component, OnInit } from '@angular/core';
import {Ad} from "../ad/model/ad.model";
import {AdsServices} from "../ad/service/ads.services";
import {HttpErrorResponse} from "@angular/common/http";
import {map, Observable, take} from "rxjs";
import {User} from "../../auth/model/user.model";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  ads!: Ad[];
  ad!:Ad;
  errorMessage!: string;
  isValid:boolean=true;

  user: User=this.authService.getUserFromStorage();

  constructor(private adService:AdsServices,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getContent();
  }

  onListUpdate():void{
    this.getContent();
  }

  onAdDelete(adId: number): void{
    this.adService.deleteAd(adId).subscribe(
      {
        next:()=>{
          this.ads=this.ads.filter(ad =>ad.id!==adId);
        }
      }
    );
  }

  onAnAppliedAd(adId:number):void{
    console.log(adId);
      this.adService.getAd$(adId).subscribe((response )=>{
        this.ad=response;
        this.user.ads?.push(this.ad);
        this.ad.user?.push(this.authService.getUserFromStorage());
        this.authService.storeUserData(this.user);
        this.authService.putUser$(this.user).subscribe();
        this.adService.putAd$(this.ad).subscribe();
      })




  }

  private getContent():void{

    this.adService.getAds$().pipe(
      map((response:Ad[])=>{
        const sortedResponse=this.ads=response.sort((a,b)=>{
          if(a.title<b.title){
            return -1;
          }
          if(a.title>b.title){
            return 1;
          }
          return 0
        });
        return sortedResponse;
      }),take(1)
    ).subscribe({
      next: (response:Ad[])=>{
        this.ads=response;
      },error:(response:HttpErrorResponse)=>{
        this.errorMessage=response.message;
      }
    })
  }

  onLikedAd(adId:number):void {

      this.adService.getAd$(adId).subscribe((response )=>{
        this.ad=response;

        if(this.ad.likes==null){
          this.ad.likes=0;
          this.ad.likes++;
        }
        else{
          this.ad.likes++;
        }
        this.adService.putAd$(response).subscribe(()=>{
          this.getContent();
        });

      })


  }
}
