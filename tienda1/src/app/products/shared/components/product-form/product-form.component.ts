import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'ed-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form:FormGroup = new FormGroup({
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
    precio:new FormControl('')

  });

  @Input() nombre: string | undefined;//Pasar Parametros con otros datos
  @Input() labelSubmit: string | undefined;
  @Input() 
  set model(m:Product){
    if(!m){
      return;
    }
    console.log('set model',m);
    this.form.patchValue(m); //Acepta mas atributos de lo que espera
  }

  @Output() submit:EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel:EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.submit.emit(this.form.value); //Enviamos el modelo de datos Product
    }else{
      console.error('Form is invalid')
    }

  }
  onCancel(){
    this.cancel.emit();
  }

}
