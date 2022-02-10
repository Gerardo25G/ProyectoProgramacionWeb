import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
<<<<<<< HEAD
    ProductFormComponent,
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
    
  ]
})
export class ProductsModule { }
