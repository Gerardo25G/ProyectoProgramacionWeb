import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public archivos: any =[]
  public previsualizacion : string | undefined ;
  bandera: boolean | undefined;
  ban:string | undefined ;
  
  form: FormGroup = new FormGroup({
    //id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    color:new FormControl(''),
    marca:new FormControl(''),
    cantidad:new FormControl(''),
    precio:new FormControl(''),
    imagen:new FormControl('')
  });

   id:number | any;

  constructor(private route:ActivatedRoute,private service:ProductsService, private router : Router, private snackBar: MatSnackBar,private sanitizer: DomSanitizer) { }

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
      if(this.bandera){
        product.imagen=this.ban;
      }
      
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


  capturarFile(event: any):any{
    //let a: string;
    this.bandera=true;
    let a=event.target.value;
    this.ban=a.slice(12);
    //console.log(this.ban);
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

}
