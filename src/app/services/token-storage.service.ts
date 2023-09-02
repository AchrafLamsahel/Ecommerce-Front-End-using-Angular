import { Injectable } from '@angular/core';
import { Token } from '../model/token';
import { HttpHeaders } from '@angular/common/http';

export const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
const TOKEN_KEY = '@zeRtY193!';
export const AUTH_API = 'http://localhost:8080/auth/signin';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  
  signOut(): void { 
    window.sessionStorage.clear();
    // sessionStorage : pour sauvegarde les donner au niveau la session utilisateur.c'est miex des utiliser pour suprimer si vou allez deconnecte.par contre LocalSStorage reste dans navigateur.
    // LocalSStorage : pour sauvegarde les donner au niveau la prowser utilisateur.via les cokies
   }

   /** Save Token */
  public saveToken(token: Token): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }
  /** GetToken */
  public getToken(): Token | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      return JSON.parse(token);
    } return null;
  }
  /** Get La Valeur de Token  */
  public getTokenValue(): string | null {
    const token = this.getToken();
    if (token) {
      return token.jwttoken;
    } return null;
  }
  /** Get Les Roles à traver le Token  */
  public getRoles(): string[] | null {
    const token = this.getToken();
    if (token) { return token.roles; } return null;
  }
  /** Get UserName à traver le Token  */
  public getUsername(): string | null {
    const token = this.getToken(); 
    if (token) {
      return token.username;
    } return null;
  }
  /** Does the token have the role ?  */
  public hasRole(role: string): boolean | null {
    const token = this.getToken();
    if (token) {
      return token.roles.includes(role);
    }
    return null;
  }
}
