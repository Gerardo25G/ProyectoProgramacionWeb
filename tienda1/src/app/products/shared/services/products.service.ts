import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const prod_url='http://localhost:8080/tiendademo/ws/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<any>(prod_url);
  }

  add(product:Product){
    return this.httpClient.post<Product>(prod_url,product);
  }

  getEdit(id:number):Observable<Product>{
    let url = "http://localhost:8080/tiendademo/ws/productos/edit/";
    return this.httpClient.get<Product>(url+id);
  }

  update(product: Product):Observable<Product>{
    return this.httpClient.put<Product>(prod_url,product);
  }

  delete(id:number):Observable<Product>{
    let url = "http://localhost:8080/tiendademo/ws/productos/delete/";
    return this.httpClient.delete<Product>(url+id);
  }

}
