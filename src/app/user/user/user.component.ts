import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../auth/model/user.model";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  user: User=this.authService.getUserFromStorage();

  constructor( private authService :AuthService) { }

  ngOnInit(): void {

  }


}
