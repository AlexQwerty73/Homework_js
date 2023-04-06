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
        console.log("Winter");
        break;
    case 'February':
        console.log("Winter");
        break;
    case 'December':
        console.log("Winter");
        break;
    case 'May':
        console.log("Spring");
        break;
    case 'April':
        console.log("Spring");
        break;
    case 'March':
        console.log("Spring");
        break;
    case 'June':
        console.log("Summer");
        break;
    case 'July':
        console.log("Summer");
        break;
    case 'August':
        console.log("Summer");
        break;
    case 'September':
        console.log("Autumn");
        break;
    case 'October':
        console.log("Autumn");
        break;
    case 'November':
        console.log("Autumn");
        break;
    default:
        console.log('??');
        break;
}
// 4

number = 5;
power = 2;
let pow = (num, pow) => {
    return Math.pow(num, pow);
}
console.log(pow(number, power));

// 5
const maxNumber = 10;
let random_5 = (maxNum) => {
    return Math.random() * maxNum;
}
console.log(random_5(maxNumber));
// 6
let numArray = [3, 4, 73, 24, 8, 2, 80];

const getMaxNumber = (arr) => {
    return Math.max.apply(null, arr);
}
console.log(getMaxNumber(numArray));
// 7
const password_ = 'n8jgf7i';
const password__ = 'iytibyi';

const password_check = (pas, pas_) => {
    return (pas == pas_ ? true : false);
}
console.log(password_check(password_, password__));
// 8    НЕ ПРАЦЮE
let number8_1 = 5;
let number8_2 = 25;
const abs_func = (n1, n2) => {
   return Math.abs(n1 + n2);
}
console.log(abs_func(number8_1, number8_2));
// 9

let random_9 = () => {
    return Math.random() * 10;
}
console.log(random_9());