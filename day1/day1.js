"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let input;
try {
    input = (0, fs_1.readFileSync)("./testInput2.txt").toString().split("\n");
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
                const possibleFirstMatch = (_a = value.match(number)) === null || _a === void 0 ? void 0 : _a[0];
                if (typeof possibleFirstMatch === "string") {
                    firstNumber = numbers.indexOf(possibleFirstMatch) + 1;
                }
            }
        }
        //sum += Number(onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1]);
    }
    console.log(sum);
}
catch (e) {
    console.log("Error:", e.stack);
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
//# sourceMappingURL=day1.js.map