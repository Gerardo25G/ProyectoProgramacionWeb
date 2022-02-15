import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '../shared/moduls/factura';
import { FacturaService } from '../shared/services/factura.service';


@Component({
  selector: 'ed-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  facturas:any;

  //products: Product[] | undefined;
  cargar: boolean=false;

  constructor(private service:FacturaService, private router:Router) { }

  ngOnInit(): void {
    this.buscarFacturas();
  }

  buscarFacturas(){
    this.cargar=true;
    this.service.getAll()
      .subscribe(data=>{
        console.log('data',data);
        this.cargar=false;
        this.facturas=data;
    })
    
  }

  submit(){
    //this.router.navigate(['/list']);
  }

  

}
