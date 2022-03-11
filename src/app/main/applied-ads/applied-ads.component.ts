import { Component, OnInit } from '@angular/core';
import {User} from "../../auth/model/user.model";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-applied-ads',
  templateUrl: './applied-ads.component.html',
  styleUrls: ['./applied-ads.component.scss']
})
export class AppliedAdsComponent implements OnInit {


  user: User=this.authService.getUserFromStorage();

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
