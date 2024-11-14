import * as rls from 'readline-sync';
import { Veterinaria1, Veterinaria2, Veterinaria3 } from "./Veterinaria";
import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";

// intancias / Veterinarias
let veterinaria1 = new Veterinaria1("Veterinaria Umma", "dorrego 2745", Math.random());
let veterinaria2 = new Veterinaria2("Sr. Firulais", "Urquiza 123", Math.random());
let veterinaria3 = new Veterinaria3("Mr. bigotes", "Av.Pringles 432", Math.random());

// clientes
let cliente1 = new Cliente("Andrea", 2284301901, Math.random());
let cliente2 = new Cliente("Homero" ,35686975 , Math.random());
let cliente3 =new Cliente ("Catalina", 47558320 ,Math.random());

// pacientes
let paciente1 = new Paciente("Clota", "gato", false);
let paciente2 = new Paciente("Simba", "tortuga", true);
let paciente3 = new Paciente("Roberto", "loro", true);

// proveedor 
let proveedor1 = new Proveedor("Sabrositos", 2284423244);
let proveedor2 = new Proveedor("Royal canin", 2284456789);
let proveedor3 = new Proveedor("Company", 2284214365);

// bienvenida
console.error("-----------------------------");

console.log("BIENVENIDOS A LA RED DE VETERINARIA UMMA");

console.error("-----------------------------");

// menu de bienvenida
let bienvenido: string = rls.question("Precione la tecla X para ver el menu: ");
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
                console.error("-----------------------------");
                console.log(cliente1);
                console.error("-----------------------------");
                console.log(cliente2);
                console.error("-----------------------------");
                console.log(cliente3);
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
                console.error("-----------------------------");
                console.log(proveedor1);
                console.error("-----------------------------");
                console.log(proveedor2);
                console.error("-----------------------------");
                console.log(proveedor3);
                console.error("-----------------------------");
                break;
        };
    } else {
        console.error("Error vuelva a escribir la letra X.");
    }

    let menu2: string = rls.question("Ingrese la letra X para volver al menu principal o S para salir: ");
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