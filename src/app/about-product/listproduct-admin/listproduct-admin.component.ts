import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listproduct-admin',
  templateUrl: './listproduct-admin.component.html',
  styleUrls: ['./listproduct-admin.component.css']
})
export class ListproductAdminComponent implements OnInit {

  personObservable! : Observable<Array<Product>>;
  product : Product = new Product();
  persons! : Observable<Array<Product>>;
  person : Product = new Product();
  
  constructor(private productService : ProductService,private fb: FormBuilder
             ,private router : Router,private activateRoot : ActivatedRoute){}
  
  products! : Observable<Array<Product>>;
  errorMessage! : any;
  searchformGroup! : FormGroup ;
  
  ngOnInit(): void {
  this.products=this.productService.getAllProduct().pipe(
    catchError(err=>{
      this.errorMessage=err.message;
      return throwError(err);
    })
  );
  }

  handleUpdateProduct(id : any){
    this.router.navigate(['updateProduct',id])
  }
  
  handleDeletProduct(c : Product){
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
      window.location.reload();
    }
  }
    // Inside your AllUsersComponent class
getImageUrl(base64: string): string {
  const mimeType = 'image/jpeg'; // Adjust the MIME type as needed
  return this.convertBase64ToImageUrl(base64, mimeType);
}

private convertBase64ToImageUrl(base64: string, mimeType: string): string {
    if (!this.validateBase64(base64)) {
      console.error('Invalid base64 string:', base64);
      return '';
    }
  
    const binary = atob(base64);
    const arrayBuffer = new ArrayBuffer(binary.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binary.length; i++) {
      uintArray[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([uintArray], { type: mimeType });
    return URL.createObjectURL(blob);
  }
  private validateBase64(input: string): boolean {
    const validChars = /^[A-Za-z0-9+/]*={0,2}$/;
    const isValid = validChars.test(input) && input.length % 4 === 0;
    console.log('Base64 validation result:', isValid);
    return isValid;
  }
  
}
