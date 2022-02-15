import { Product } from "src/app/products/shared/models/product";
import { Factura } from "./factura";

export class FacturaDetalles {
    codigo:number | undefined;
	cantidad: number | undefined;
	precio:number | undefined;
	subtotal:number | undefined;
	iva:number | undefined;
	total:number | undefined;
	fac_numero:number | undefined;
    producto:Product | undefined;
	fac: Factura |undefined;


	// constructor(cantidad: number){

	// }

	// public getcantidad(){
	// 	return this.cantidad;
	// }
	// public setCantidad(cantidad:number){
	// 	return this.cantidad=cantidad;
	// }
}

