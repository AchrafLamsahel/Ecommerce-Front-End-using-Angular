import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_API,httpOptions } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  
  constructor(private http: HttpClient) { } 


  login(username: string, password: string,email : string): Observable<any> {
     return this.http.post(AUTH_API,{username,password,},httpOptions); 
    }

}
