import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
    precio:new FormControl('')
  });

  codigo: string | any;

  constructor(private route:ActivatedRoute,private service:ProductsService) {}

  ngOnInit(): void {

    this.codigo = this.route.snapshot.paramMap.get('codigo') //Vamos a tener clave Valor
    this.service.get(this.codigo)
      .subscribe(product =>{
        console.log('product',product);
        this.form.setValue(product)
      });




  }

}
