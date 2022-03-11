import { Component, OnInit } from '@angular/core';
import {AdsServices} from "../ad/service/ads.services";
import {AuthService} from "../../auth/service/auth.service";
import {Ad} from "../ad/model/ad.model";
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {

  ad!:Ad;
  destroy$=new Subject<boolean>();

  constructor(private adService:AdsServices,
              private authService: AuthService,
              private router: Router,
              private route:ActivatedRoute,) { }

  ngOnInit(): void {

    this.route.params.pipe(
      switchMap((params)=>{
        if(params["id"]){
          return this.adService.getAd$(params['id']);
        }


        return of(null);
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next:(response)=>{
        if(response){
          this.ad=response;

        }

      }
    });


  }

  onAccept():void {

  }

  onDeny():void {

  }
}
