import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  public addContact(contactObject: any) {
    return this.httpClient.post<contact>(this.baseUrl+"/contact", contactObject);
  }


}
