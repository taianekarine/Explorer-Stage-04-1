// Bora praticar e rever tudo o que foi ensinado na aula? **💜**
// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [x]  A soma dos dois números;
// - [x]  A subtração dos dois números;
// - [x]  A multiplicação dos dois números;
// - [x]  A divisão dos dois números;
// - [x]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.


// Funções
const noneNumber = firstNumber === secondNumber;

if(noneNumber == 0 || '0' ){
  alert(`Por favor, preencha os campos abaixo e não utilize o número 0.
      Agradecemos sua compreenção!`)
}

const handleClick = () => {

  const firstNumber = document.getElementById('firstNumber').value;
  const numberFirst = parseFloat(firstNumber);
  const secondNumber = document.getElementById('secondNumber').value;
  const numberSecond = parseFloat(secondNumber);
  const oddOrEven = numberFirst + numberSecond;

const Addition = () => {

  const calc = numberFirst + numberSecond
  let resultText = `A soma dos valores é de ${calc}.`
  addition.textContent = resultText

      return calc.toFixed(2)
}
Addition()

const Subtraction = () => {

  const calc = numberFirst - numberSecond
  let resultText = `A subtração dos valores é de ${calc}.`
  subtraction.textContent = resultText

      return calc.toFixed(2)
}
Subtraction()

const Division = () => {

  const calc = numberFirst / numberSecond
  let resultText = `A divisão dos valores é de ${calc}.`
  division.textContent = resultText

      return calc.toFixed(2)
}
Division()

const RemainderOfDivision = () => {

  const calc = numberFirst % numberSecond
  let resultText = `O resto da divisão dos valores é de ${calc}.`
  remainder_of_division.textContent = resultText

      return calc.toFixed(2)
}
RemainderOfDivision()

if(oddOrEven % 2 == 0) {
  const firstSentence = `A soma dos dois valores é par.`
  first_sentence.textContent = firstSentence
} else {
  const firstSentence = `A soma dos dois valores é ímpar.`
  first_sentence.textContent = firstSentence
}

if(numberFirst === numberSecond) {
  const secondSentence = `Os números informados são iguais.`
  second_sentence.textContent = secondSentence
} else {
  const secondSentence = `Os números informados são diferentes.`
  second_sentence.textContent = secondSentence
}

const Sentence = `Espero ter ajudado!`
sentence.textContent = Sentence

}



