import {Injectable} from "@angular/core";
import {AuthService} from "../auth/service/auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn:'root'
})

export class AclGuard{

  constructor( private authService:AuthService,
               private router:Router) {

  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean  {
    const loggedUser=this.authService.getUserFromStorage();
    if(loggedUser.role!=='organisation'){
      this.router.navigate(['/'])

      return false;
    }
    return true;
  }

}
