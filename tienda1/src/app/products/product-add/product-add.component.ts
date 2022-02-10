import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Product } from '../shared/models/product';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
<<<<<<< HEAD
import { DomSanitizer } from '@angular/platform-browser';
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

<<<<<<< HEAD
  public archivos: any =[]
  public previsualizacion : string | undefined ;
  ban:string | undefined ;
  

  form: FormGroup = new FormGroup({
    //id:new FormControl(''),
=======
  form: FormGroup = new FormGroup({
    id:new FormControl(''),
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
<<<<<<< HEAD
    precio:new FormControl(''),
    imagen:new FormControl()
  });

  constructor(private service: ProductsService, private router: Router, private snackBar: MatSnackBar,private sanitizer: DomSanitizer) { }
=======
    precio:new FormControl('')
  });

  constructor(private service: ProductsService, private router: Router, private snackBar: MatSnackBar) { }
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1

  ngOnInit(): void {

    
  
  }

  submit() {
    if(this.form.valid){
      const product = this.form.value;
<<<<<<< HEAD
      product.imagen=this.ban
      console.log('Going to save', product);
      
      //this.subirArchivo(product);
=======
      
      console.log('Going to save', product);
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
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
<<<<<<< HEAD
      
=======


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
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
  }

  cancel() {
    this.router.navigate(['']);
  }
<<<<<<< HEAD


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
=======
}
;
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
