// // Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
} 

// // Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
  
}

// Desafio 3
function splitSentence(palavra) {
  let palavraLista = palavra.split(' ');
  for (let index = 0; index < palavra.length; index += 1) {
    palavra[index] = palavraLista;
  }
  return palavraLista;
}

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
} 

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let aux = 0;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    let valor = arrayDeNumeros[index];
    if (valor > maiorNumero) {
      maiorNumero = valor;
      aux = 1;
    } else if (valor === maiorNumero) {
      aux += 1;
    }
  }
  return aux;
}

// Desafio 7
//Consultei a documentação do W3 achools para entender a função Math.abs
function catAndMouse(mouse, cat1, cat2) {
  let mensagem = 'os gatos trombam e o rato foge';
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } return mensagem;
}


// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayDeStrings = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] % 3 === 0 && arrayDeNumeros[index] % 5 === 0) {
      arrayDeStrings.push('fizzBuzz');
    }else if (arrayDeNumeros[index] % 3 === 0) {
      arrayDeStrings.push('fizz');
    } else if (arrayDeNumeros[index] % 5 === 0) {
      arrayDeStrings.push('buzz');
    }else{
      arrayDeStrings.push('bug!')
    }
  }return arrayDeStrings;
}


// Desafio 9
function encode(string) {
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
