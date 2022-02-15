import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from '../products/product-edit/product-edit.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';
import { FacturaMaestroComponent } from './factura-maestro.component';
import { FacturaComponent } from './factura/factura.component';

const routes: Routes = [


  {
    path:'',
    component: FacturaMaestroComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'fac',
      },
      {
        path:'fac',
        component:FacturaComponent
      },
      // {
      //   path:'det',
      //   component:FacturaDetalleComponent
      // },
      {
        path:'det/:id',
        component:FacturaDetalleComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaMaestroRoutingModule { }
