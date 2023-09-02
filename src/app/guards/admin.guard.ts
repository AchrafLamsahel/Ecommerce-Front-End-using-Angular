import { Injectable } from '@angular/core'; 
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router'; 
import { Observable } from 'rxjs'; 
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private tokenService:TokenStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.tokenService.hasRole('ADMIN')) {
      console.log("vous n'êtes pas autorisé à accéder à cette fonctionnalité"); 
      alert("vous n'êtes pas autorisé à accéder à cette fonctionnalité");
      return false; 
     }
   else 
     return true;
  }

 
}
