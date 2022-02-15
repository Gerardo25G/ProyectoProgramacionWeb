import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaMaestroRoutingModule } from './factura-maestro-routing.module';
import { FacturaComponent } from './factura/factura.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FacturaComponent,
    FacturaDetalleComponent
  ],
  imports: [
    CommonModule,
    FacturaMaestroRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FacturaMaestroModule { }
