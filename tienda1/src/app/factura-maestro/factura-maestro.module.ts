import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaMaestroRoutingModule } from './factura-maestro-routing.module';
import { FacturaComponent } from './factura/factura.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';


@NgModule({
  declarations: [
    FacturaComponent,
    FacturaDetalleComponent
  ],
  imports: [
    CommonModule,
    FacturaMaestroRoutingModule
  ]
})
export class FacturaMaestroModule { }
