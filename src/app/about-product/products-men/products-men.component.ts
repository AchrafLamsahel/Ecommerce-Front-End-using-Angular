import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-men',
  templateUrl: './products-men.component.html',
  styleUrls: ['./products-men.component.css']
})
export class ProductsMenComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router,private cartService:CartService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: Product[]) => {
      this.products = data.filter((product: Product) => product.targetGender === 'Men');
      console.log(this.products);
    });
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  goToProduct(id:any){
    this.router.navigate(["/details-product/" + id]);
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
}

