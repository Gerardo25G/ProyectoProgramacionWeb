import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CrearpersonaComponent } from './components/crearpersona/crearpersona.component';
import { TComponent } from './components/t/t.component';
import { ToolbarClienteComponent } from './components/toolbar-cliente/toolbar-cliente.component';



@NgModule({
  declarations: [
    LoginComponent,
    ToolbarComponent,
    CrearpersonaComponent,
    TComponent,
    ToolbarClienteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports:[
    ToolbarComponent
  ]
})
export class SharedModule { }
