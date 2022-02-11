import { Product } from "src/app/products/shared/models/product";

export interface FacturaDetalles {
    codigo:number;
	cantidad:number;
	precio:number;
	subtotal:number;
	iva:number;
	total:number;
	fac_numero:number;
    producto:Product;
}