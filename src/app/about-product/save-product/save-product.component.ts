import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  productForm: FormGroup;
  productObj: Product = new Product();
  file : any[]=[];
  image:string='';

  constructor(private _snackBar: MatSnackBar,
        private productService: ProductService, private route : Router) {
    this.productForm = new FormGroup({
      category: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      coin: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      image: new FormControl([], Validators.required),
      targetGender: new FormControl("", [Validators.required]) // Fixed the missing parenthesis
    });
  }
  ngOnInit() {

  }

  handleFileInput(files: any[]) {
    this.prepareFilesList(files);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.file.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.file.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.file[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.file[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  onClickSubmitForm() {
    if (!this.productForm.invalid) {
      this.productObj.name = this.productForm.value.name;
      this.productObj.targetGender = this.productForm.value.targetGender;
      this.productObj.category = this.productForm.value.category;
      this.productObj.description = this.productForm.value.description;
      this.productObj.city = this.productForm.value.city;
      this.productObj.coin = this.productForm.value.coin;
      this.productObj.image = this.base64code;

      this.productService.addProduct(this.productObj).subscribe(
        data => {
          console.log("Product added successfully:", data);
          //dthis.productForm.reset();
          //this.route.navigateByUrl("/listproducts");
        },
        error => {
          console.error("Error adding product:", error);
          this.popup('Error adding product', 'Retry');
        }
      );
    } else {
      this.popup('Input error', 'Retry');
    }
    window.location.reload();
  }
  

  popup(var1: string, var2: string) {
    this._snackBar.open(var1, var2, {
      duration: 3000,
      //panelClass: 'my-snackbar',
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  myImage!: Observable<any>;
  base64code!: any;
  
  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    //console.log(file)
    this.convertToBase64(file)
  }
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    observable.subscribe((d) => {
      // console.log(d)
      this.myImage = d
      this.base64code = d
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file)
    filereader.onload = () => {
      subscriber.next(filereader.result)
      subscriber.complete()
    }
    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }
}
function push(item: any) {
  throw new Error('Function not implemented.');
}



