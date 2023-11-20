//Argumentos y Parámetros
// A continuación creamos dos función que toma
//dos parámetros combinandolos y devolviendo un return


//Funcion para calcular area de rectangulo
function areaRectangulo(base, altura) {
    return base * altura;
}
//Funcion para combinar palabras
function combinarPalabras(palabra1, palabra2) {
    return `${palabra1} ${palabra2}`;
}


//Ahora realizamos una llamada de las funciones con argumentos
let area = areaRectangulo(5, 8);
console.log(`Área del rectángulo: ${area}`);


let combinado = combinarPalabras("Hola ", "Mundo");
console.log(combinado)

//Retorno
//El retorno nos devuelve mensajes. Verificaremos si un número es par y devolver un mensaje
function numeroPar(num) {
    if (num % 2 === 0) {
        return `${num} es un número par.`;
    } else {
        return `${num} no es un número par. `;
    }
}
//Llamamos para mostrar el resultado
let mensaje = numeroPar(7);
console.log(mensaje);