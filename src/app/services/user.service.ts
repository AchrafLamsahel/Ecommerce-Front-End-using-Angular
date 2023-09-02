import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  

  backendHost : string ="http://localhost:8080";

  public getUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(this.backendHost+"/admin/usersClient")
  }
  /**   Vrai  */
  public saveUser(user : User):Observable<User>{
    return this.http.post<User>(this.backendHost+"/adminCreate",user);
  }

  public search(username : string):Observable<Array<User>>{
    return this.http.get<Array<User>>(this.backendHost+"/admin/search?username="+username)
  }
  /**   Vrai */
  public delete(id : number) {
    return this.http.delete(this.backendHost+"/admin/user/"+id)
  }

  public getUserById(id : number):Observable<User>{
    return this.http.get<User>(this.backendHost+"/admin/user/"+id)
  }

  public update(id : number,person:User):Observable<Object>{
    return this.http.put(this.backendHost+"/persons/"+id,person)
  }
  
}
