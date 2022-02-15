import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../moduls/factura';
import { Temporal } from '../moduls/temporal';


const fact_url='http://localhost:8080/tiendademo/ws/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Factura>{
    return this.httpClient.get<any>(fact_url);
  }

  llenaDetalle(temp: Temporal):Observable<Temporal>{
    return this.httpClient.put<Temporal>(fact_url,temp);

    console.log("Llegamos")
  }

  cancelarA(temp: Temporal):Observable<Temporal>{
    let url="http://localhost:8080/tiendademo/ws/factura/cancel";
    return this.httpClient.put<Temporal>(url,temp);

    console.log("Llegamos")
  }

  

  getAllDetalle():Observable<Factura>{
    let url="http://localhost:8080/tiendademo/ws/factura/tem"
    return this.httpClient.get<any>(url);
  }

  add(factura:any){
    console.log("Llegada Factura " + factura.fecha)
    return this.httpClient.post<any>(fact_url,factura);
    // console.log("adsad  " + JSON.stringify(factura))
    // const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    // const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})} 
    // return this.httpClient.post<any>(fact_url,JSON.stringify(factura),{'headers':headers});
  }


  add1(detalles:any){
    // let url = "http://localhost:8080/tiendademo/ws/factura/detalle"
    // console.log("adsad  " + JSON.stringify(detalles))
    // const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    // const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})} 
    // return this.httpClient.post<any>(url,JSON.stringify(detalles),{'headers':headers});
  }



  
}
