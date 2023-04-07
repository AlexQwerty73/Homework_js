let number;

// 1
number = 4;
const parne_neparne_func = (num) => {
    num % 2 == 0 ?
        console.log("парна") :
        console.log("непарна");
}
parne_neparne_func(number);
// 2
if (number == 7) {
    console.log("Це 7");
} else if (5 < number && number < 10) {
    console.log(`${number} є більше 5 та меншше 10`);
} else {
    console.log("Число не входить в діапазон чисел");
}
// 3
/*
January, February, March, April, 
May, June, July, August, September, 
October, November, December
*/
const month = 'February';

switch (month) {

    case 'January':
    case 'February':
    case 'December':
        console.log("Winter");
        break;

    case 'May':
    case 'April':
    case 'March':
        console.log("Spring");
        break;

    case 'June':
    case 'July':
    case 'August':
        console.log("Summer");
        break;

    case 'September':
    case 'October':
    case 'November':
        console.log("Autumn");
        break;

    default:
        console.log('??');
        break;
}
// 4

number = 5;
const power = 2;
const pow = (num, pow) => {
    return Math.pow(num, pow);
}
console.log(pow(number, power));
// 5

const string5 = "Doby";
number = 5;

const StringRepeat = (num, str) =>  num != 1 ? str + StringRepeat(num - 1, str) : str;

console.log(StringRepeat(number, string5));

// 6
const maxNumber = 10;
let random_6 = (maxNum) => {
    return Math.random() * maxNum;
}
console.log(random_6(maxNumber));

// 7
let numArray = [3, 4, 73, 24, 8, 2, 80];

const getMaxNumber = (arr) => {
    return Math.max.apply(null, arr);
}
console.log(getMaxNumber(numArray));

// 8
const password_ = 'n8jgf7i';
const password__ = 'iytibyi';

const password_check = (pas, pas_) => {
    return (pas == pas_ ? true : false);
}
console.log(password_check(password_, password__));

// 9   
const number9_1 = 5;
const number9_2 = 25;
const absFunc = (n1, n2) => {
    return Math.abs(n1 + n2);
}
console.log(absFunc(number9_1, number9_2));

// 10
let random_10 = () => {
    return Math.random() * 10;
}
console.log(random_10());

// 11
number = 3.8;

const getFactorial = (num) => num != 1 ? num * getFactorial(Math.floor(num) - 1) : 1;

console.log(getFactorial(number));

// 12 ??
number = 89;

const sqrtFunc = (num) => {
    return 
}
console.log(sqrtFunc(number));