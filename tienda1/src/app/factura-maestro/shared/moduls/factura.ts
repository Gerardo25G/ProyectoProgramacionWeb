import { FacturaDetalles } from "./facturadetalles";

export interface Factura {
    numero:number;
	fecha:Date;
	subtotal:number;
	iva:number;
	total:number;
	anulado:boolean;
	detallesList: FacturaDetalles;
    //imagen:string;
}