import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura-maestro/factura/factura.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [

{
    path:'login',
    component:LoginComponent
},
{
  path:'',//Me redirecciona a productos 
  pathMatch:'full',
  redirectTo:'list'
},
// {
//   path:'list',
//   component:ProductListComponent
//   //loadChildren:()=> import('./products/products.module').then(m=>m.ProductsModule) //Me retorna una promesa
// },
{
  path:'fac',
  component:FacturaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
