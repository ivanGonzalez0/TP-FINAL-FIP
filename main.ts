import * as rls from 'readline-sync';

import { Veterinaria1, Veterinaria2, Veterinaria3 } from "./veterinaria";
import { Paciente } from "./paciente";
import { Cliente } from "./cliente";
import { Proveedor } from "./proveedores";

// intancias / Veterinarias
let veterinaria1 = new Veterinaria1("Veterinaria Umma", "dorrego 2745", Math.random());
let veterinaria2 = new Veterinaria2("Sr. Firulais", "Urquiza 123", Math.random());
let veterinaria3 = new Veterinaria3("Mr. bigotes", "Av.Pringles 432", Math.random());

// clientes
let cliente = new Cliente("andrea", 2284301901, Math.random());

// pacientes
let paciente1 = new Paciente("Clota", "gato", false);
let paciente2 = new Paciente("Simba", "tortuga", true);
let paciente3 = new Paciente("Roberto", "loro", true);

// proveedor 
let proveedor = new Proveedor("Sabrositos", 2284423244);

// bienvenida
console.error("-----------------------------");

console.log("bienvenido a la Veterinaria Umma");

console.error("-----------------------------");

// menu de bienvenida
let bienvenido: string = rls.question("precione la tecla X para ver el menu: ");
while (true) {
    if (bienvenido === "x") {
        console.error("-----------------------------");
        console.log("1_SUCURSALES");
        console.log("2_CLIENTES");
        console.log("3_PACIENTES");
        console.log("4_PROVEEDORES");
        console.error("-----------------------------");

        // menu 2
        let menu: number = rls.questionInt("ingrese un numero del menu para ver el contenido: ");
        switch (menu) {
            case 1:
                console.error("-----------------------------");
                console.log(veterinaria1);
                console.error("-----------------------------");
                console.log(veterinaria2);
                console.error("-----------------------------");
                console.log(veterinaria3);
                break;
            case 2:
                console.log(cliente);
                break;
            case 3:
                console.error("-----------------------------");
                console.log(paciente1);
                console.error("-----------------------------");
                console.log(paciente2);
                console.error("-----------------------------");
                console.log(paciente3);
                break;
            case 4:
                console.log(proveedor);
                break;
        };
    } else {
        console.error("error vuelva a escribir la letra X.");
    }

    let menu2: string = rls.question("ingrese la letra X para volver al menu principal o S para salir: ");
    if (menu2 === "x") {
        console.error("-----------------------------");
        console.log(menu2);
    } else if (menu2 === "s") {
        console.error("-----------------------------");
        console.error("A salido con exito");
        console.error("-----------------------------");
        break;
    }
}

