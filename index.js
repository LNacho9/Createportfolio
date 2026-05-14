const input = require("prompt-sync")();
main();
function main(){
    menuportfolio();
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
        case 1:
            break;
        case 2:
            break;
        case 3: menusalida();
            break;
        default: console.log("Opcion invalida");
            break;
    }

}