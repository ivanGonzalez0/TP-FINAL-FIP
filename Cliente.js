"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, vip) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.clienteVip = 5;
    }
    Cliente.prototype.altaPaciente = function () {
        throw new Error("Method not implemented.");
    };
    Cliente.prototype.bajaPaciente = function () {
        throw new Error("Method not implemented.");
    };
    Cliente.prototype.vipCliente = function () {
        if (this.clienteVip > 5) {
            console.log("El cliente ".concat(this.nombre, " es Vip"));
        }
        else {
            console.log("El cliente ".concat(this.nombre, " no es Vip"));
        }
    };
    Cliente.prototype.altaCliente = function () {
        console.log("Alta Cliente");
    };
    Cliente.prototype.bajaCliente = function () {
        console.log("Baja Cliente");
    };
    Cliente.prototype.modificarDatos = function () {
        console.log("Modificacion de datos");
    };
    Cliente.prototype.numeroId = function () {
        console.log(Math.random());
    };
    return Cliente;
}());
exports.Cliente = Cliente;
/*class Cliente {
  private nombre: string;
  private telefono: string; // Cambiado a string
  private clienteVip: number;

  constructor(nombre: string, telefono: string, vip: number = 0) { // Cambiado a 0 por defecto
      this.nombre = nombre;
      this.telefono = telefono;
      this.clienteVip = vip; // Utilizando el parámetro vip
  }

  public vipCliente(): void {
      if (this.clienteVip > 5) {
          console.log(`El cliente ${this.nombre} es VIP`);
      } else {
          console.log(`El cliente ${this.nombre} no es VIP`);
      }
  }

  public altaCliente(): void {
      console.log("Alta Cliente");
  }

  public bajaCliente(): void {
      console.log("Baja Cliente");
  }

  public modificarDatos(): void {
      console.log("Modificación de datos");
  }

  public numeroId(): void {
      console.log(Math.random());
  }
}*/ 
