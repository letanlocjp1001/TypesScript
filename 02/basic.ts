function add(n1: number, n2: number, n3: boolean, n4: string) {
  if (n3 === true) {
    const total = n1 + n2
    console.log(n4 + total)
  } else {
    return n1 + n2
  }
}

const number1 = 5
const number2 = 2.8

const printResult = true
const resultPhrase = 'Reassss: '

add(number1, number2, printResult, resultPhrase)
