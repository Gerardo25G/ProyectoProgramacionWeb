import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/shared/components/service/persona.service';
import { Comentario } from '../shared/models/comentario';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';
import { ServicecomentariosService } from '../shared/services/servicecomentarios.service';

@Component({
  selector: 'ed-product-list-cliente',
  templateUrl: './product-list-cliente.component.html',
  styleUrls: ['./product-list-cliente.component.css']
})
export class ProductListClienteComponent implements OnInit {

  cedula : number |any
  products: Product[] | any;
  //coment : Comentario | any;

  constructor(private servicePersona: PersonaService, private service: ProductsService, private router : Router, private snackBar: MatSnackBar,private route:ActivatedRoute,private serviceComen:ServicecomentariosService) { }

  form: FormGroup = new FormGroup({
    descripcion:new FormControl(''),
  });

  ngOnInit(): void {

    this.service.getAll()
    .subscribe(data=>{
      console.log('data',data);
      this.products=data;
    })

    this.cedula = this.route.snapshot.paramMap.get('id')
  }

submit(id: any){
  console.log("asdasd"+id)
  console.log(this.cedula)
  const coment = this.form.value;
  //this.router.navigate(['/','comment', id,]);

  if(this.form.valid){


    console.log("asdasdasd" + coment.descripcion)
    this.service.getEdit(id)
      .subscribe(product =>{
        console.log('product',product);
        
          this.servicePersona.getCedula(this.cedula)
          .subscribe(persona =>{
            console.log('persona',persona);
            coment.producto1=id;
            coment.persona=this.cedula;
            this.envio(coment)
            
          });
        
      });

  }
}

envio(coment: Comentario){
  // console.log("asdasd" + coment.descripcion)
  // console.log("asdasd" + coment.persona.apellido)
  // console.log("asdasd" + coment.producto1.descripcion)

  this.serviceComen.add(coment)
        .subscribe(resul=>{
            console.log('Comentario Agregado')
            //this.router.navigate(['']);
            //Mensajes de confirmacion
            this.snackBar.open('Creado Correctamente','Close',{
              duration: 3000
            });
        });
}

deleteProduct(product:Product){
  this.service.delete(product.id)
    .subscribe(response =>{
      console.log('Producto Eliminado Correctamente',response);
      this.loadProducts();
      this.snackBar.open('Producto Eliminado Correctamente','Close',{
        duration:3000
      });
    });

}

private loadProducts(){
  this.service.getAll()
    .subscribe(result=>this.products=result);


}
}
