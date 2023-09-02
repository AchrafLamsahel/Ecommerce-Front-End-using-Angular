import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit{
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userLoggedIn = '';
  constructor(private authorizationService: AuthorisationService, private tokenStorage: TokenStorageService, 
              private route: ActivatedRoute, private router: Router) { }
    
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get f() { 
    return this.form.controls; 
  }

  ngOnInit(): void { } 
  
  submit() {
    if (this.form.status === 'VALID') {
      this.authorizationService.login(<string>this.form.controls['username'].value,
       <string>this.form.controls['password'].value,'')
        .subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.userLoggedIn = <string>this.tokenStorage.getUsername();
            // this.router.navigate([{ outlets: { primary: 'navbar', contenu: 'contenu' } }]);
            this.router.navigateByUrl('/home');
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
          complete : ()=>console.log('Fin')
        });
    }
          
    }

}

