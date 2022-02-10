import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const prod_url='http://localhost:8080/tiendademo/ws/productos';

<<<<<<< HEAD

=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Product[]>{
<<<<<<< HEAD
    return this.httpClient.get<any>(prod_url);
  }

  add(product:Product){
    return this.httpClient.post<Product>(prod_url,product);
=======
    let url = "http://localhost:8080/tiendademo/ws/productos";
    return this.httpClient.get<any>(url);
  }

  add(product:Product){
    let url = "http://localhost:8080/tiendademo/ws/productos";
    return this.httpClient.post<Product>(url,product);
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
  }

  getEdit(id:number):Observable<Product>{
    let url = "http://localhost:8080/tiendademo/ws/productos/edit/";
    return this.httpClient.get<Product>(url+id);
  }

  update(product: Product):Observable<Product>{
<<<<<<< HEAD
    return this.httpClient.put<Product>(prod_url,product);
  }

  delete(id:number):Observable<Product>{
    let url = "http://localhost:8080/tiendademo/ws/productos/delete/";
    return this.httpClient.delete<Product>(url+id);
  }

=======
    let url = "http://localhost:8080/tiendademo/ws/productos";
    return this.httpClient.put<Product>(url,product);
  }
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
}
