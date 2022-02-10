import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { DomSanitizer } from '@angular/platform-browser';
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
<<<<<<< HEAD

  public archivos: any =[]
  public previsualizacion : string | undefined ;
  bandera: boolean | undefined;
  ban:string | undefined ;
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
  
  form: FormGroup = new FormGroup({
    //id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
<<<<<<< HEAD
    precio:new FormControl(''),
    imagen:new FormControl('')
=======
    precio:new FormControl('')
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
  });

   id:number | any;

<<<<<<< HEAD
  constructor(private route:ActivatedRoute,private service:ProductsService, private router : Router, private snackBar: MatSnackBar,private sanitizer: DomSanitizer) { }
=======
  constructor(private route:ActivatedRoute,private service:ProductsService, private router : Router, private snackBar: MatSnackBar) { }
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id') //Vamos a tener clave Valor
<<<<<<< HEAD

=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
    this.service.getEdit(this.id)
      .subscribe(product =>{
        console.log('product',product);
        this.form.patchValue(product);
        
      });
<<<<<<< HEAD
      
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
  }

  submit(){

    if(this.form.valid){
      const product=this.form.value;
      product.id=this.id;
<<<<<<< HEAD
      if(this.bandera){
        product.imagen=this.ban;
      }
      
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
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

<<<<<<< HEAD

  capturarFile(event: any):any{
    //let a: string;
    this.bandera=true;
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

=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
}
