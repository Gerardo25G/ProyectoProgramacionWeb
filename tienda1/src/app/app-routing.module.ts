import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaDetalleComponent } from './factura-maestro/factura-detalle/factura-detalle.component';
import { FacturaMaestroComponent } from './factura-maestro/factura-maestro.component';
import { FacturaComponent } from './factura-maestro/factura/factura.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CrearpersonaComponent } from './shared/components/crearpersona/crearpersona.component';
import { LoginComponent } from './shared/components/login/login.component';
import { TComponent } from './shared/components/t/t.component';

const routes: Routes = [

{
    path:'login',
    component:LoginComponent
},
{
  path:'crea',
  component:CrearpersonaComponent
},
{
  path:'log',
  component:TComponent
},
{
  path:'fac',
  component:FacturaComponent
},
// {
//   path:'',//Me redirecciona a productos 
//   pathMatch:'full',
//   redirectTo:'list'
// },
// {
//   path:'list',
//   component:ProductListComponent
//   //loadChildren:()=> import('./products/products.module').then(m=>m.ProductsModule) //Me retorna una promesa
// },
{
  path:'det/:id',
  component:FacturaDetalleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
