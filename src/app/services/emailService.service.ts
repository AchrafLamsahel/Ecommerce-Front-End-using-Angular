import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }
  
  sendCodeActivationToEmail(email: string): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/codeActivate/${email}`, email);
  }

  
  resetPassword(code: string, password: string): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/resetPassword/${code}/${password}`, null);
  }
}
