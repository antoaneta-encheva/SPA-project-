import {Injectable} from "@angular/core";
import {CanLoad, Route, Router, Routes, UrlSegment} from "@angular/router";
import {AuthService} from "../auth/service/auth.service";

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanLoad{
  constructor(private authService:AuthService,
              private router:Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]):boolean {
    const loggedUser=this.authService.getUserFromStorage();

    if(!loggedUser){
      this.router.navigate(['/auth','login']);

      return false;
    }
    return true;
  }

}
