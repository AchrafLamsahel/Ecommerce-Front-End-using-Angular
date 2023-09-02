import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorisationService } from '../services/authorisation.service';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthorisationService, private tokenService:TokenStorageService) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.tokenService.getToken() != null) { 
        console.log("TEST");
        console.log(this.tokenService.getToken());
          let roles = next.data['roles'] as Array<string>
          // if (roles) {
          //     if (this.authService.roleMatch(roles)) {
          //         return true;
          //     }
          //     else {
          //         this.router.navigate(['forbidden']);
          //         return false;
          //     }
          // }
          return true
      }
      console.log(this.tokenService.getToken());
      this.router.navigate(['home']);
      return false
      
   
  }
}
