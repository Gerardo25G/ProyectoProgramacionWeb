import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    //id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
    precio:new FormControl('')
  });

   id:number | any;

  constructor(private route:ActivatedRoute,private service:ProductsService, private router : Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id') //Vamos a tener clave Valor
    this.service.getEdit(this.id)
      .subscribe(product =>{
        console.log('product',product);
        this.form.patchValue(product);
        
      });
  }

  submit(){

    if(this.form.valid){
      const product=this.form.value;
      product.id=this.id;
      console.log('Actualizar',product);
      this.service.update(product)
        .subscribe(result=> console.log('Actualizado Finalizado',result));
      this.router.navigate(['/']);
      this.snackBar.open('Producto Actualizado Correctamente','Close',{
        duration:3000
      });
    }

  }

  cancel(){
    this.router.navigate(['/']);
  }

}
