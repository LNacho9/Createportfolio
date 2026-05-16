const input = require("prompt-sync")();
main();
function main(){
    menuportfolio();
}
function crearportafolio() {
    console.log("---------------------CREA TU PORTFOLIO TOTALMENTE GRATIS-----------------------------");
    console.log("-------------------------COMPLETA TODOS LOS CAMPOS----------------------------------------");
    const nombre = String(input("Ingrese el nombre de su perfil:\n"));
    const activos = String(input("Ingrese el nombre de los activos:\n"));
    const dinero_inversion = Number(input("Ingrese la cantidad de dinero a invertir inicialmente:\n"));
    const porcentaje_activo = Number(input("Ingrese que porcentaje le va a poner a cada activo:\n"));
    const req_funcionales = [nombre, activos, dinero_inversion, porcentaje_activo];
    const perfiles = [req_funcionales];
}
function menusalida(){
    console.log("Hasta la proxima!");   
    }
function menuportfolio(){
    console.log("------------------HOLA BIENVENIDO A CREATEPORTFOLIO------------------");
    console.log("aca vas a poder crear tu portfolio y gestionarlo de manera muy simple");
    console.log("que deseas hacer?");
    console.log("1-crear nuevo portfolio\n");
    console.log("2-modificar un portfolio existente\n");
    console.log("3-salir");
    const eleccion_usuario = Number(input("Ingresa un numero: "));
    switch (eleccion_usuario) {
        case 1:crearportafolio();
            break;
        case 2:
            break;
        case 3: menusalida();
            break;
        default: console.log("Opcion invalida");
            break;
    }
}