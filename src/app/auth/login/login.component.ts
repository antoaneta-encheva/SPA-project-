import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit():void {

    //1.login request

    this.authService.login$(this.formGroup.value).subscribe(
      {
        next:(response)=>
        {
          if (response){
            //2.store data, local-storage
            this.authService.storeUserData(response);
            //3. navegate to the systme
            this.router.navigate(['/']);
          }
        }
      }
    );


  }
}
