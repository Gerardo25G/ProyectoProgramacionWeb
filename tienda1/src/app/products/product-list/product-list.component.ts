import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] | undefined;

<<<<<<< HEAD
  constructor(private service: ProductsService, private router : Router, private snackBar: MatSnackBar) { }
=======
  constructor(private service: ProductsService) { }
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1

  ngOnInit(): void {

    this.service.getAll()
    .subscribe(data=>{
      console.log('data',data);
      this.products=data;
    })
  }

<<<<<<< HEAD
submit(id: any){
  this.router.navigate(['/','edit', id]);
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
=======
>>>>>>> 87cd3a8a1609a0f96342073c847a032f862f79a1
}
