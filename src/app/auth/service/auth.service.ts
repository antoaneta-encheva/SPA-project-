import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Login} from "../model/login.model";
import {map, Observable} from "rxjs";
import {User} from "../model/user.model";
import {environment} from "../../../environments/environment";
import {Ad} from "../../main/ad/model/ad.model";

@Injectable({
  providedIn:'root'
})

export class AuthService{

  private url=`${environment.apiUrl}/users`;
    constructor(private http:HttpClient) {
    }

  login$(data: Login):Observable<User|null>{

    return this.http.get<User[]>(`${environment.apiUrl}/users`)
      .pipe(
        map((response) => {
          const user=response.find(u=> u.username===data.username
            && u.password===data.password);

          if(user){
            return user;
          }

          else
          {
            return null;
          }
        })
      );

  }

  storeUserData(user: User):void {

    localStorage.setItem('loggedUser',JSON.stringify(user));
  }

  getUserFromStorage():User{

    // @ts-ignore
    return JSON.parse(localStorage.getItem('loggedUser'));
  }
  logout():void{
    localStorage.removeItem('loggedUser');
  }

  putUser$(user:User):Observable<User>{
    const url=`${this.url}/${user.id}`
    return  this.http.put<User>(url,user);

  }

}
