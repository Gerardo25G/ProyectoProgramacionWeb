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
    let url = "http://localhost:8080/tiendademo/ws/productos";
    return this.httpClient.get<any>(url);
  }

  add(product:Product){
    let url = "http://localhost:8080/tiendademo/ws/productos";
    return this.httpClient.post<Product>(url,product);
  }

  get(id:string):Observable<Product>{
    let url = "http://localhost:8080/tiendademo/ws/productos";
    return this.httpClient.get<Product>(url+id);
  }

}
