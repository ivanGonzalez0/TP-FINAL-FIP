"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Proveedor.prototype.altaPaciente = function () {
        console.log("Alta paciente");
    };
    Proveedor.prototype.bajaPaciente = function () {
        console.log("Baja paciente");
    };
    Proveedor.prototype.modificarDatos = function () {
        console.log("Modificacion de datos");
    };
    Proveedor.prototype.numeroId = function () {
        console.log(Math.random());
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
