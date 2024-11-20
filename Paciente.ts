import { Veterinaria } from "./Veterinaria";

export class Paciente implements Veterinaria{
    private nombre: string;
    private especie: string;
    private exotica: boolean; // false = perro y gato

    public constructor(nombre:string, especie: string, exotica: boolean){
        this.nombre= nombre;
        this.especie= especie;
        this.exotica= exotica;
    }
    public alta(): void {
        console.log(`La paciente ${this.nombre} fue dado de alta`);
    }
    public baja(): void {
        console.log(`El paciente ${this.nombre} fue dado de baja`);
    }
    public modificarDatos(): void {
        console.log(`Modificacion de datos del paciente ${this.nombre}`);
    }
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }
}