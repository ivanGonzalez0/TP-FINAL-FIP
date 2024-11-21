export interface Veterinaria {
    idAleatorio():void
    alta(): void;
    baja(): void;
    modificarDatos(): void;
}
// Veterinaria 1
export class Veterinaria1 implements Veterinaria {
    private nombre: string;
    private direccion: string;
    protected id: number;

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
    public alta(): void {
        console.log(`el cliente ${this.nombre} fue dado de alta y este es el id: ${this.idAleatorio} `);
    }
    public baja(): void {
        console.log("Baja........");
    }
    public modificarDatos(): void {
        console.log("Modificacion de datos");
    }
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
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
    // metodos
    public alta(): void {
        console.log(`el cliente ${this.nombre} fue dado de alta y este es el id: ${this.idAleatorio} `);
    }
    public baja(): void {
        console.log("Baja.....");
    }
    public modificarDatos(): void {
        console.log("Modificacion de datos");
    }
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
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
    // metodos
    public alta(): void {
        console.log(`el cliente ${this.nombre} fue dado de alta y este es el id: ${this.idAleatorio} `);
    }
    public baja(): void {
        console.log("Baja.......");
    }
    public modificarDatos(): void {
        console.log("Modificacion de datos");
    }
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }
}