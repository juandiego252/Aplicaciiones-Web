//numeros
//calculo de los gastoa que se hacen mensualmente
let gastosMensuales = 300;
let gastosDiarios = gastosMensuales / 30;
console.log(`Gasto diario estimado en 30 dias: $${gastosDiarios.toFixed(2)}`);

//conversion de dolar a euro

let dolar = 2;
let euro = 0.92
let conversion = dolar * euro
console.log(`La conversion de dolar a euro es: ${conversion.toFixed(2)}`);

//booleanos

let contraseña = "patito123";

if(contraseña === "patito123"){
    console.log("Bienvenido :D")
}else{
    console.log("Contraseña invalida :C")
}


let listaCompras = ["manzanas", "plátanos", "pan", "tomate"];
let buscar = "uvas";
let existeEnLista = listaCompras.includes(buscar);

if (existeEnLista) {
  console.log(`${buscar} está en la lista de compras.`);
} else {
  console.log(`${buscar} no está en la lista de compras.`);
}