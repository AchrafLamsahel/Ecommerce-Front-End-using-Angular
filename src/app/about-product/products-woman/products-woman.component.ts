import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-woman',
  templateUrl: './products-woman.component.html',
  styleUrls: ['./products-woman.component.css']
})
export class ProductsWomanComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router,private cartService:CartService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: Product[]) => {
      this.products = data.filter((product: Product) => product.targetGender === 'Woman');
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

