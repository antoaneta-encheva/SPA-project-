import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ad} from "../main/ad/model/ad.model";
import {User} from "../auth/model/user.model";

@Injectable({
  providedIn:'root'
})

export class UsersService{
  private url=`${environment.apiUrl}/users`;

  constructor(private http:HttpClient) {
  }

  getUsers$(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  getUser$(id:number): Observable<User>{
    const url=`${this.url}/${id}`;

    return this.http.get<User>(url);
  }
  postUsers$(user: User): Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  putUser$(user:User):Observable<User>{
    const url=`${this.url}/${user.id}`

    return  this.http.put<User>(url,user);
  }

  deleteUser(id:number): Observable<void>{
    const url=`${this.url}/${id}`;
    return this.http.delete<void>(url);
  }
}
