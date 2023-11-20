/* Funciones 
 * Creamos una funcion para calcular el salrio neto
 * Esta funcion recibe un argumeto (salarioBruto)
 * Dentro de esta funcion se resta el aporte al
 * seguro social y devulve el salario neto del 
 * empleado
*/

function salarioNeto(salario){
    const seguroSocial= salario - 75.60;
    const salarioNeto = seguroSocial;
    return salarioNeto;
}

console.log(salarioNeto(2000));




/*
* Funciones expresadas
* Dependiendo la operacion ingresada se asigna 
* una funcion expresada a la varibale operacion.
*/

const readlineSycn = require('readline-sync');
let operacion = readlineSycn.question('Introduce la operacion:')

if(operacion.toLowerCase() === "suma"){
    operacion = function(a,b){

        return a+b;
    }
} else {
    operacion = function(a,b){
        return a-b;
    }
}

let resultado = operacion(5,3);

console.log(resultado);




const credencialesValidas = {
    usuarioValido: "admin",
    passwordValida: "admin"
};

// Funcion Anonima
const validarCredenciales = function(user,pass){
    return user === credencialesValidas.usuarioValido && pass === credencialesValidas.passwordValida;
};

const user = "admin";
const pass = "admin";

if(!validarCredenciales(user,pass)){
    console.log("Credenciales invalidas, ingresar nuevamente");
} else{
    console.log("Aacceso Exitoso !");
}



(function(){

    // Variables que pertenecen a esta funcion
    let datos = [2,4,6,8,10]
    // Funcion para elevar al cuadrado los elementos de un array
    function procesarDatos(){
        datos = datos.map(i=> i**2);
        console.log("Datos al cuadrado:", datos);
    };
    // llamar a la funcion
    procesarDatos();
})();