import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }
  
  public addProduct(productObject: any) {
    return this.httpClient.post<Product>(this.baseUrl+"/admin/create", productObject);
  }
  
  public getProductById(id:any){
    return this.httpClient.get<Product>(this.baseUrl+"/client/product/"+ id)
  }

  public getAllProduct(){
    return this.httpClient.get<Product[]>(this.baseUrl+"/client/product")
  }

  public deleteById(id : any){
    return this.httpClient.delete(this.baseUrl+"/admin/delete/"+id)
  }
  getProductsByGender(targetGender: string){
    return this.httpClient.get<Product[]>(this.baseUrl+"/client/product");
  }
  
  public updateProduct(id : number,product:Product):Observable<Object>{
    return this.httpClient.put(this.baseUrl+"/admin/update/"+id,product)
  }
}
