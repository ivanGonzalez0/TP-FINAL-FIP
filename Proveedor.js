"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Proveedor.prototype.alta = function () {
        console.log("El proveedor ".concat(this.nombre, " fue dado de alta"));
    };
    Proveedor.prototype.baja = function () {
        console.log("El proveedor ".concat(this.nombre, " fue dado de alta"));
    };
    Proveedor.prototype.modificarDatos = function () {
        console.log("Datos modificados del proveedor ".concat(this.nombre));
    };
    Proveedor.prototype.idAleatorio = function () {
        return Math.floor(Math.random() * 10000);
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
