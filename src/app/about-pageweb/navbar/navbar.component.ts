import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/CartService';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem : number = 0;

  constructor(private tokenService:TokenStorageService,
              private router:Router, private cartService:CartService){}

  private showNavbar = true;

  setShowNavbar(value: boolean) {
       this.showNavbar = value;
   }
            
    getShowNavbar() {
       return this.showNavbar;
    }
  onLogOut(){
    this.tokenService.signOut();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
