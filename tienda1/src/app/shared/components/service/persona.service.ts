import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../module/persona';


const per_url='http://localhost:8080/tiendademo/ws/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }


  add(persona:Persona){
    return this.httpClient.post<Persona>(per_url,persona);
  }

  getAll():Observable<Persona[]>{
    return this.httpClient.get<any>(per_url);
  }

  getCedula(id:string):Observable<Persona>{
    let url = "http://localhost:8080/tiendademo/ws/personas/edit/";
    return this.httpClient.get<Persona>(url+id);
  }


}
