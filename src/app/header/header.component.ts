import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {AuthService} from "../auth/service/auth.service";
import {User} from "../auth/model/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:User=this.authService.getUserFromStorage();


  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onLogOut():void {
    this.authService.logout();
    this.router.navigate(['/auth','login'])
  }
}
