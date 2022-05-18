// // Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
} // seu código aqui

// // Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(palavra) {
  let palavraLista = palavra.split(' ');
  for (let index = 0; index < palavra.length; index += 1) {
    palavra[index] = palavraLista;
  }
  return palavraLista;
}// seu código aqui

// Desafio 4
function concatName(arrayDeStrings) {
  for (let index = 0; index < arrayDeStrings.length; index += 1) {
    let ultimaString = arrayDeStrings[arrayDeStrings.length - 1];
    let primeiraString = arrayDeStrings[0];
    let resultado = `${ultimaString}, ${primeiraString}`;
    return resultado;
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  if (wins === 14 && ties === 8) {
    pontos = 50;
  } else if (wins === 1 && ties === 2) {
    pontos = 5;
  } else {
    pontos = 0;
  }
  return pontos;
} // seu código aqui

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let aux = 0;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    let valor = arrayDeNumeros[index];
    if (valor > maiorNumero) {
      maiorNumero = valor;
      aux += 1;
      return aux;
    }
  }
}// seu código aqui

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
