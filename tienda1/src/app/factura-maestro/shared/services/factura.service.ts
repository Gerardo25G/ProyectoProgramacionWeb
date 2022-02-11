import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../moduls/factura';

const fact_url='http://localhost:8080/tiendademo/ws/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Factura>{
    return this.httpClient.get<any>(fact_url);
  }

  
}
