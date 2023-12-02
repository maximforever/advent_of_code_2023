import { readFileSync } from "fs";

let input;

try {
  input = readFileSync("./testInput2.txt").toString().split("\n");

  let sum = 0;

  for (const value of input) {
    // let charArray = value.split("");
    // const numbers = "0123456789";

    // const onlyNumbers = charArray.filter((char) => {
    //   return numbers.includes(char);
    // });

    const numbers = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    let firstNumber = 0;
    let lastNumber = 0;

    for (const value of input) {
      for (const number of numbers) {
        const possibleFirstMatch = value.match(number)?.[0];
        if (typeof possibleFirstMatch === "string") {
          firstNumber = numbers.indexOf(possibleFirstMatch) + 1;
        }
      }
    }

    //sum += Number(onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1]);
  }
  console.log(sum);
} catch (e: any) {
  console.log("Error:", e.stack);
}

function reverseString(str: string) {
  return str.split("").reverse().join("");
}
