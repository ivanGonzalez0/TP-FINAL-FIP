export interface Veterinaria {
    numeroId(): void;
    altaPaciente(): void;
    bajaPaciente(): void;
    modificarDatos(): void;
}
// Veterinaria 1
export class Veterinaria1 implements Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;

    public constructor(nombre: string, direccion: string, id: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
    }

    // getters
    public getNombre(): string {
        return this.nombre;
    }
    public getDireccion(): string {
        return this.direccion;
    }
    public getNumeroId(): number {
        return this.id;
    }
    // setters
    public setNombre(): void {
        this.nombre = this.nombre;
    }
    public setDireccion(): void {
        this.direccion = this.direccion;
    }
    public setNumeroId(): void {
        this.id = this.id;
    }

    //Metodos
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
// Veterinaria 2
export class Veterinaria2 implements Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;

    public constructor(nombre: string, direccion: string, id: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
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
// Veterinaria 3
export class Veterinaria3 implements Veterinaria{
    private nombre: string;
    private direccion: string;
    private id: number;

    public constructor(nombre: string, direccion: string, id: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
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