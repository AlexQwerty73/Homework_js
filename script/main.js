// 1
const aSide = 3;
const bSide = 3;
const hypotenuse = (side1, side2) => Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
console.log("1 -", hypotenuse(aSide, bSide));

// 2

const random0_1 = () => Math.round(Math.random() * 100) / 100;
console.log("2 -", random0_1());

// 3

const arr3 = [1, 3, 4, 5, 7, 9, 2];
const reverseArray = (array) => array.reverse();
console.log("3 -", reverseArray(arr3));

// 4

const arr4 = [1, 2, 3, 4, 5, 6];
const sumArray = (array) => {
    let sum = 0;
    array.filter(array => array % 2 == 0);
    array.forEach(number => sum += number);
    return sum;
}
console.log("4 -", sumArray(arr4));

// 5

let arr5 = [' String  ', ' STRing', 'sTRING ', '  sTrInG'];
const stringFunc5 = (array) => array.map(element => element.trim());
console.log("5 -", stringFunc5(arr5));

// 6

console.log("6 -");
const number6 = 2;

const tableM = (num) => {
    let tableArr = [];
    for (let i = 1; i <= 10; i++) {
        tableArr.push(`${i} * ${num} = ${i * num}`);
        console.log(tableArr[i - 1]);
    }
}
tableM(number6);

// 7

const arr7 = [2, 5, 4, 7, 5, 2, 1];

const indArray = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        array.indexOf(array[i]) == array.lastIndexOf(array[i]) ? newArr.push(array[i]) : null;
    }
    return newArr.length === 0 ? "Empty" : newArr;
}
console.log("7 -", indArray(arr7));

// 8

const arr8 = ['q', 'qjiw', 'ewq', 'qw', 'w'];

const longestStr = (array) => {
    let max = '';
    for (let str of array) max.length <= str.length ? max = str : max;
    return max;
}

console.log("8 -", longestStr(arr8));

// 9

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrPower2 = (array) => array.map(num => Math.pow(num, 2));

// якщо через цикл for:
const arrPower2 = (array) => {
    let newArr = [];
    for (let num of array) newArr.push(Math.pow(num, 2));
    return newArr;
}

console.log("9 -", arrPower2(arr9));

// 10

const arr10 = ['ABIWUBD', 'INuIHBygv', 'Apple', 'Qwerty'];

// const toLowerCaseArr = (array) => array.map(str => str.toLowerCase());

// якщо через цикл for:
const toLowerCaseArr = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) newArr.push(array[i].toLowerCase());
    return newArr;
}
console.log("10 -", toLowerCaseArr(arr10));

// 11

const arr11 = [1, 2, 3, 4, 5];

const averageNumber = (arr) => {
    let sum = 0;
    for (let num of arr) sum += num;
    return sum / arr.length;
}
console.log("11 -", averageNumber(arr11));
