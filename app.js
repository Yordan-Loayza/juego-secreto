let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
// console.log(numeroSecreto);
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verifyUser() {
  let numberUser = parseInt(document.getElementById("valueUser").value);
  //   console.log(intentos);
  if (numberUser === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numberUser > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    cleanBox();
  }
  return;
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteado);
  //si ya se sorteo todos los numeros
  if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    //si el numero esta incluido hacemos algo
    if (listaNumeroSorteado.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSorteado.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function cleanBox() {
  document.querySelector("#valueUser").value = "";
}
function initialConditions() {
  asignarTextoElemento("h1", "Juego del numero secreto!");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function restartGame() {
  /*cleanbox, message numbers, generate random number,
    disabled button restart game, start attempts */
  cleanBox();
  initialConditions();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
initialConditions();
