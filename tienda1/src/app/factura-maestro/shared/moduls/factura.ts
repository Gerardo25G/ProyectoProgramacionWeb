import { FacturaDetalles } from "./facturadetalles";

export class Factura {
    numero:number | undefined;
	fecha:Date | undefined;
	subtotal:number | undefined;
	iva:number | undefined;
	total:number | undefined;
	anulado:boolean | undefined;
	detallesList: FacturaDetalles[] | undefined;
    //imagen:string;
}