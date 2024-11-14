/*Pacientes (mascotas): nombre, especie (si no es perro o gato, 
deberá registrarse como exótica), id del dueño, las veterinarias
 deben contar con la opción de alta, baja y modificación de 
los mismos.*/

import { Veterinaria } from "../Veterinaria";

export class Paciente implements Veterinaria{
    private nombre: string;
    private especie: string;
    private exotica: boolean; // false = perro y gato

    public constructor(nombre:string, especie: string, exotica: boolean){
        this.nombre= nombre;
        this.especie= especie;
        this.exotica= false;
    }
    public altaPaciente(): void {
        console.log(`El paciente ${this.nombre} fue dado de alta`);
    }
    public bajaPaciente(): void {
        console.log(`El paciente ${this.nombre} fue dado de baja`);
    }
    public modificarDatos(): void {
        console.log(`Modificacion de datos del paciente ${this.nombre}`);
    }
    public numeroId(): void {
        console.log(Math.random());
    }
}