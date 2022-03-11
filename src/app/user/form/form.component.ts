import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ad} from "../../main/ad/model/ad.model";
import {User} from "../../auth/model/user.model";
import {AuthService} from "../../auth/service/auth.service";
import {of, switchMap, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup!: FormGroup;
  user: User=this.authService.getUserFromStorage();

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router: Router,) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void{
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();

      return;
    }

    let request$;

    //request$=;


    this.authService.putUser$(this.user).subscribe({
      next: ()=>{
        this.router.navigate(['/user/profile']);
        this.authService.storeUserData(this.user);
      }
    });
  }





  private initForm():void{
    this.formGroup=this.fb.group({
      id: this.user.id,
      username: this.user.username,
     password:this.user.password,
      role:this.user.role,
      email:this.user.email,
    });
  }
}
