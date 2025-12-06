
const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const palos = ["♦", "♠", "♥ ", "♣"];



function newCard() {
  let getNumeros = Math.floor(Math.random() * numeros.length);
  let getPalos = Math.floor(Math.random() * palos.length);
  return { "numero": numeros[getNumeros], "palo": palos[getPalos] }
}

function superFuncion() {
let randomCard = newCard()
document.getElementById("arriba").textContent = `${randomCard.palo}`
document.getElementById("medio").textContent = `${randomCard.numero}`
document.getElementById("abajo").textContent = `${randomCard.palo}`
}

document.getElementById("boton").addEventListener("click", superFuncion); 

setInterval(superFuncion, 10000);
 

