import { Veterinaria } from "./veterinaria";

export class Cliente implements Veterinaria {
    private nombre: string;
    private telefono: number;
    private numeroVisitas: number;
    
  

    constructor(nombre: string, telefono: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.numeroVisitas=0;
       
    
       
    }
    // Generar un random de 0 a 10000, Math. floor redondea hacia abajo el número decimal resultante al entero más cercano
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }

    public vipCliente(): boolean {
        return this.numeroVisitas >=5; 
    }

    public registrarVisita(): void {
        this.numeroVisitas++;
        console.log(`El cliente ${this.nombre} es VIP, este es el Total de visitas: ${this.vipCliente()}`);
        if (this.vipCliente()) {
            console.log(`El cliente ${this.nombre} es VIP, este es el ID: ${this.idAleatorio()}`);
        }else {
            console.log(`El cliente ${this.nombre} no es VIP`);
        }
    }
    public alta(): void {
        console.log("Alta del cliente");
    }
    public baja(): void {
        console.log("Baja ");
    }
    public modificarDatos(): void {
        console.log(`Datos modificados del cliente${this.nombre}`);
    }
    public numeroId(): void {
        console.log(Math.random());
    }
}
