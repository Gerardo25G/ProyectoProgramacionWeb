import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../models/comentario';

const com_url='http://localhost:8080/tiendademo/ws/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ServicecomentariosService {

  constructor(private httpClient: HttpClient) { }


  add(comenta:Comentario){
    //console.log("HOla" + comenta.descripcion)
    //return this.httpClient.post<Comentario>(com_url,comenta);
    let url = "http://localhost:8080/tiendademo/ws/comentarios"
    console.log("adsad  " + JSON.stringify(comenta))
    const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})} 
    return this.httpClient.post<any>(url,JSON.stringify(comenta),{'headers':headers});
  } 
}
