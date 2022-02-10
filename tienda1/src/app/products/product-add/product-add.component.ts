import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Product } from '../shared/models/product';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public archivos: any =[]
  public previsualizacion : string | undefined ;
  ban:string | undefined ;
  

  form: FormGroup = new FormGroup({
    //id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
    precio:new FormControl(''),
    imagen:new FormControl()
  });

  constructor(private service: ProductsService, private router: Router, private snackBar: MatSnackBar,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    
  
  }

  submit() {
    if(this.form.valid){
      const product = this.form.value;
      product.imagen=this.ban
      console.log('Going to save', product);
      
      //this.subirArchivo(product);
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
      
  }

  cancel() {
    this.router.navigate(['']);
  }


  capturarFile(event: any):any{
    //let a: string;
    let a=event.target.value;
    this.ban=a.slice(12);
    console.log(this.ban);
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((image: any) => {
    this.previsualizacion = image.base;
    })
    this.archivos.push(archivoCapturado);
    

  }


  extraerBase64 = async ($event: any) => new Promise((resolve, reject): any | undefined => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })


  // subirArchivo(product:Product): any {
  //   try {
  //     //this.loading = true;
  //     const formularioDeDatos = new FormData();
  //     this.archivos.forEach((archivo: string | Blob) => {
  //       formularioDeDatos.append('files', archivo)
  //       product.imagen(formularioDeDatos);
  //     })

  //   } catch (e) {
  //     console.log('ERROR', e);

  //   }
  //}

}
