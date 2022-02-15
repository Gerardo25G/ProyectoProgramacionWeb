import { Persona } from "src/app/shared/components/module/persona";
import { Product } from "./product";

export interface Comentario {
    id:number;
    descripcion: string;
    persona:string;
    producto1:number;
}