import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styleUrls: ['./factura-detalle.component.css']
})
export class FacturaDetalleComponent implements OnInit {

  cargar:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  consultar(){
    
  }

}
