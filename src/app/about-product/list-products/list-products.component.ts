import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  abc         : any;
  public getproduct: any[] = [];
  products! : Observable<Array<Product>>;
  public filterCategory : any
  searchKey:string ="";

  constructor(private productService: ProductService,private router: Router, private cartService : CartService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data:any)=>{
      console.log(data)
      this.getproduct=data;
    })
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  handleDeleteProduct(c : Product){
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
    
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  goToProduct(id:any){
    this.router.navigate(["/details-product/" + id]);
  }

  filter(category:string){
    this.filterCategory = this.getproduct
    .filter((a:any)=>{
      if(a.category === category){
        return a;
      }
    })
  }
}
