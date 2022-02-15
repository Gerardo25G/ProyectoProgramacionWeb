import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/shared/models/product';
import { ProductsService } from 'src/app/products/shared/services/products.service';
import { Factura } from '../shared/moduls/factura';
import { FacturaDetalles } from '../shared/moduls/facturadetalles';
import { Temporal } from '../shared/moduls/temporal';
import { FacturaService } from '../shared/services/factura.service';


@Component({
  selector: 'ed-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styleUrls: ['./factura-detalle.component.css']
})
export class FacturaDetalleComponent implements OnInit {

  cargar:boolean=false;
  factura:Factura | any;
  cantidad:number | any;
  facturaDeta : FacturaDetalles | any;
  detalles:FacturaDetalles[]=[];

  total:number | any;
  enTotal:number| any;

  subtotal:number | any;
  enSubTotal :number | any;

  ivaFac:number | any;
  enIvaFac:number | any;

  fecha:Date | any;
  hoy1 : Date | any;


  

  // temporal: Temporal | any;
  


  
  //const prod= new Product();

  
  products:Product[]=[];
  details:FacturaDetalles[]|any;
  detail:FacturaDetalles | any;


  form: FormGroup = new FormGroup({
    //id:new FormControl(''),
    numero:new FormControl(''),
    fecha:new FormControl(''),
    subtotal:new FormControl(''),
    iva:new FormControl(''),
    total:new FormControl(''),
    anulado:new FormControl(''),
    cantidad:new FormControl('')
  });



  constructor( private service: ProductsService,private serviceFac:FacturaService) { }

  ngOnInit(): void {
    this.getAllProduct();
    const tiempoTranscurrido = Date.now();
    this.hoy1 = new Date(tiempoTranscurrido);
    this.fecha=this.hoy1.toLocaleDateString();
  }
  


  delete(producto:any){
    //this.factura.detalleList.splice(this.factura.detallesList.indexOf(producto),1)
  }

  getAllProduct(){
    this.service.getAll()
    .subscribe(data=>{
      console.log('data',data);
      this.products=data;
    })
  }

  comprar(id: number){
    const temporal = this.form.value;
    temporal.id_pro=id;
    this.cantidad=this.form.controls.cantidad.value;
    temporal.id_cantidad=this.form.controls.cantidad.value;
    this.service.getEdit(id).subscribe(product =>{console.log('product',product);
        this.mandar(product, this.cantidad);
    });

    // this.serviceFac.llenaDetalle(temporal)
    //     .subscribe(result=> console.log('Hola',result));
    
    
    

    // this.serviceFac.getAllDetalle()
    //     .subscribe(data=>{ console.log('data',data);
    //       //this.products=data;
    //     })

    //console.log("r "+ temporal.id_pro + "ddd " + temporal.id_cantidad)
  }
  mandar(pro: Product, cantidad:number){
    this.total=0;
    this.subtotal=0;
    this.ivaFac=0;

    this.facturaDeta = new FacturaDetalles();
    this.facturaDeta.cantidad=cantidad;
    this.facturaDeta.precio = pro.precio
    this.facturaDeta.subtotal=(pro.precio*cantidad);
    this.facturaDeta.iva=((this.facturaDeta.subtotal*(0.12)));
    this.facturaDeta.total=((this.facturaDeta.subtotal + this.facturaDeta.iva));
    this.facturaDeta.producto=pro;
    //this.facturaDeta.fac=this.factura;

    this.detalles.push(this.facturaDeta);

    for(let i = 0 ; i < this.detalles.length ; i++){

      this.subtotal=(this.detalles[i].total + this.subtotal)
      this.enSubTotal=this.subtotal.toFixed(2);

      this.ivaFac= (this.enSubTotal *0.12)
      this.enIvaFac = this.ivaFac.toFixed(2)

      this.total=(this.subtotal + this.ivaFac);
      this.enTotal=this.total.toFixed(2)

    }

    //console.log(this.detalles[0])

    

  }

  guardar(){

    this.factura = new Factura();
    
    this.factura.fecha = this.hoy1;
    this.factura.subtotal= this.enSubTotal;
    this.factura.iva=this.enIvaFac;
    this.factura.total=this.enTotal;
    this.factura.detalleList=this.detalles;
    this.factura.anulado=true;

    if(this.factura.detalleList==null){
      console.log("Hola 8888")
    }else
      console.log("dasdasd")

    for(let i = 0 ; i < this.factura.detalleList.length ; i++){
       console.log("Hola " + this.factura.detalleList[i].total)
     }

     this.serviceFac.add(this.factura)
         .subscribe(resul=>{
           console.log('Factura Agregada',this.factura)
            //this.router.navigate(['']);
            //Mensajes de confirmacion
            //this.snackBar.open('Producto Creado Correctamente','Close',{
              //duration: 3000
        });
      
      // this.serviceFac.add1(this.detalles)
      //   .subscribe(resul=>{
      //     console.log('Factura Agregada')
      //      //this.router.navigate(['']);
      //      //Mensajes de confirmacion
      //      //this.snackBar.open('Producto Creado Correctamente','Close',{
      //        //duration: 3000
      //  });


    // const temporal = this.form.value;
    // temporal.id_cantidad=5;

    // this.serviceFac.cancelarA(temporal)
    // .subscribe(result=> console.log('Hola',result));

  }

  EliminarProducto(index:any){
    this.detalles.splice(index,1)
  }


}
