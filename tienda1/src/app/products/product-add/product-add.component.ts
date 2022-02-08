import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Product } from '../shared/models/product';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
    precio:new FormControl('')
  });

  constructor(private service: ProductsService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    
  
  }

  submit() {
    if(this.form.valid){
      const product = this.form.value;
      
      console.log('Going to save', product);
      this.service.add(product)
        .subscribe(resul=>{
            console.log('Producto Agregado')
            this.router.navigate(['']);
            //Mensajes de confirmacion
            this.snackBar.open('Producto Creado Correctamente','Close',{
              duration: 3000
            });
        });
      }else{
        console.error('Producto no creado')
      }


        // .pipe(
        //   catchError(error => {
        //     this.snackBar.open(error, null, {
        //       duration: 3000
        //     });
        //     // catch & replace
        //     return EMPTY;
        //   })
        // )
        // .subscribe(result => {
        //   console.log('The product has been added', result);
        //   this.router.navigate(['']);
        //   // mensaje de confirmacion
        //   this.snackBar.open('Product has been added', 'Close', {
        //     duration: 3000// milliseconds
        //   });
        // });
  }

  cancel() {
    this.router.navigate(['']);
  }
}
;