import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [

  {
    path:'',
    component: ProductsComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'list',
      },
      {
        path:'list',
        component:ProductListComponent
      },
      {
        path:'add',
        component:ProductAddComponent
      },
      {
        path:'edit/:id',
        component:ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
