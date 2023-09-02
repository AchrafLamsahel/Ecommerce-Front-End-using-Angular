import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  /** */
  name = "One Plus 9r";
  city = "Patna,Bihar";
  datepost = "";
  coin = 20000;
  description =
    " Operating System: OxygenOS based on Android 11 CPU: Qualcomm® Snapdragon™ 870.. GPU: Adreno 650. RAM: 8GB/12GB";
  category = "";
  image:string="";
  id = 2;
  public productdata: any;


  constructor(
    private _productdetailsService: ProductService,
    private domSanitizer: DomSanitizer,
    private productService: ProductService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe((data) => {
      this.productdata = data;
       console.log(data);
      
      this.name = this.productdata.name
      this.category = this.productdata.category
      this.city = this.productdata.city
      this.datepost = this.productdata.datepost
      this.coin = this.productdata.coin
      this.description = this.productdata.description
      this.image=this.productdata.image

    })
  }
}

