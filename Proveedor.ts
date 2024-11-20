import { Veterinaria } from "./veterinaria";

export class Proveedor implements Veterinaria {
    private nombre: string;
    private telefono: number;


    constructor(nombre: string, telefono: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        
    }

    public alta(): void {
        console.log(`El proveedor ${this.nombre} fue dado de alta`);
    }
    public baja(): void {
        console.log(`El proveedor ${this.nombre} fue dado de alta`);
    }
    public modificarDatos(): void {
        console.log(`Datos modificados del proveedor ${this.nombre}`);
    } public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }
        }
