import { Veterinaria } from "./Veterinaria";

export class Proveedor implements Veterinaria {
    private nombre: string;
    private telefono: number;
    
    

    constructor(nombre: string, telefono: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        
    }

   public altaPaciente(): void {
        console.log("Alta paciente");
    }
    public bajaPaciente(): void {
        console.log("Baja paciente");
    }
    public modificarDatos(): void {
        console.log("Modificacion de datos");
    }
    public numeroId(): void {
        console.log(Math.random());
    }
}