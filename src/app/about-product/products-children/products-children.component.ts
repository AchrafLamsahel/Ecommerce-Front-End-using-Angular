import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-children',
  templateUrl: './products-children.component.html',
  styleUrls: ['./products-children.component.css']
})
export class ProductsChildrenComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private cartService:CartService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: Product[]) => {
      this.products = data.filter((product: Product) => product.targetGender === 'Children');
      console.log(this.products);
    });
  }
  handleDeleteProduct(c : Product){
    /*
    let conf = confirm("Are you sure ?")
    if(!conf) return ;
    else{
      this.productService.deleteById(c.id).subscribe({
        
          next : (resp)=>{
            this.products=this.products.pipe(
              map( (data) => {
                let index = data.indexOf(c);
                data.slice(index,1);
                return data;
              })
              
            );
             },
          error : (err) => {
            console.log(err);
          }
      });
    }
    */
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  goToProduct(id:any){
    this.router.navigate(["/details-product/" + id]);
  }
    }

