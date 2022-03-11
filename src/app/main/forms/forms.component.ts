import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ad} from "../ad/model/ad.model";
import {ActivatedRoute, Router} from "@angular/router";
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {AdsServices} from "../ad/service/ads.services";

class BooksService {
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formGroup!: FormGroup;
  ad!: Ad;
  destroy$=new Subject<boolean>();

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private adService: AdsServices
  ) {
    this.ad={
      title:'',
      description:'',
      type:'',
      category:''
    };
  }



  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params)=>{
        if(params["id"]){
          return this.adService.getAd$(params['id']);
        }

        this.initForm();

        return of(null);
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next:(response)=>{
        if(response){
          this.ad=response;
          this.initForm();
        }

      }
    });


  }

  ngOnDestroy(): void{
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void{
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();

      return;
    }

    const ad: Ad = {
      id: this.formGroup.value.id,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      likes: this.formGroup.value.likes,
      type: this.formGroup.value.type,
      category:this.formGroup.value.category
    };

    let request$;

    if(ad.id){
      request$=this.adService.putAd$(ad);
    }
    else{
      request$=this.adService.postAds$(ad);
    }

    request$.subscribe({
      next: ()=>{
        this.router.navigate(['/ads']);
      }
    });
  }

  private initForm():void{
    this.formGroup=this.fb.group({
      id: this.ad.id,
      title: this.ad.title,
      description: this.ad.description,
      likes: this.ad.likes,
      type:this.ad.type,
      category: this.ad.category
    });
  }

}
