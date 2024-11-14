import { Veterinaria } from "./Veterinaria";

  export class Cliente implements Veterinaria {
      private nombre: string;
      private telefono: number;
      private clienteVip: number;
  
      constructor(nombre: string, telefono: number, vip?: number) {
          this.nombre = nombre;
          this.telefono = telefono;
          this.clienteVip =5;
      }
  
      public vipCliente(): void{
          if(this.clienteVip > 5){
              console.log(`El cliente ${this.nombre} es Vip`);
          }else{ 
              console.log(`El cliente ${this.nombre} no es Vip`);
          }
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