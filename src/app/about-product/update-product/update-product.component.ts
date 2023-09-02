import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateProductFormGroup! : FormGroup ;
  product :Product = new Product();
  updatedproduct! : number;
  image: string = ''; 
  file : any[]=[];
  imageData: string | undefined;

  constructor(private formBuilder: FormBuilder,private productService : ProductService,
              private activateRoot : ActivatedRoute,private router : Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.updateProductFormGroup = this.formBuilder.group({
      name        : ['', Validators.required],
      category    : ['', Validators.required],
      targetGender: ['', Validators.required],
      description : ['', Validators.required],
      city        : ['', Validators.required],
      coin        : ['', Validators.required],
      image       : ['',Validators.required],
    });
  
     const productId = this.activateRoot.snapshot.params['id'];
    
     this.productService.getProductById(productId).subscribe((product) => {
      this.updateProductFormGroup.patchValue(product);
     });
     
  }
  
  
  handleUpdateProduct(): void {
    const productId = this.activateRoot.snapshot.params['id'];
    const pdatedpRoduct = this.updateProductFormGroup.value;
    if (this.imageData) {
      pdatedpRoduct.image = this.imageData;
    }
    this.productService.updateProduct(productId,pdatedpRoduct).subscribe({
      next : data=>{
        //this.productService.getAllProduct();
        alert("Person has been successefully Updated !");
        //this.newProductFormGroupe.reset(); // Si vous mette save il va vider les <input> de text.
        this.router.navigateByUrl("/listproducts"); // Si vous mette save il va redirection vers http://localhost:4200/persons
      },
      error : err=>{
          console.log(err);
      }
    }) 
  }

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
  
    if (file) {
      this.convertToBase64(file);
    }
  };
  
  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageData = reader.result as string;
    };
  }

}