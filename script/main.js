// 1

const number1 = 4;
const getFactorial = (num) => num != 1 ? num * getFactorial(num - 1) : 1;
console.log(getFactorial(number1));

// 2

const str2 = 'qwq1';

const reverceStr = str2.split('').reverse().join('');
console.log(str2, reverceStr, str2 == reverceStr ? true : false);

const reverceStr2 = str2.split('').sort(a => -1).join('');
console.log(str2, reverceStr2, str2 == reverceStr2 ? true : false);

// 3

const number3_1 = 30;
const number3_2 = 25;

const maxDivisor = (n1, n2, maxNum) => n1 % maxNum == 0 && n2 % maxNum == 0 ? maxNum : maxDivisor(n1, n2, maxNum - 1);
console.log('3- ', maxDivisor(number3_1, number3_2, number3_2));

// 4-----

const arr4 = [1, 2, 3, 4, 5, 6, 5];
const avNum = arr4.reduce((prVal, curVal) => prVal + curVal) / arr4.length;
const newArr4 = arr4.filter(n => n < avNum).map(n => n + 1);

console.log('4-', newArr4);

// 5

const string5 = 'Написати функцію яка знаходить найдовше слово в реченні та повертає його разом з довжиною.';

const longestWord = (str) => {
    let longestWord = '';
    for (let word of str.split(' ')) word.length > longestWord.length ? longestWord = word : 1;
    return longestWord + ' ' + longestWord.length;
    // розширений варіант
    // const strArr = str.split(' ');
    // let longestWord = '';
    // for (let word of strArr) {
    //     word.length > longestWord.length ? longestWord = word : 1;
    // }
    // return longestWord + ' ' + longestWord.length;
}
console.log('5 -', longestWord(string5));

// 6
// 1 - 33
const letters6 = ' абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'.split('');
const numsArr6 = [21, 4, 7, 9, 15, 26, 0, 2, 0, 31, 25, 0, 7]; //0 = пробіл

const wordFromNumbers = (num) => {
    let word = [];
    for (let n of num) word.push(letters6[n]);
    return word.join('');
}

console.log('6 -', wordFromNumbers(numsArr6));

// 7

const arr7 = [12, 'de', 3, 'ed', 6, 36, 12, 6, 'qw', 'ef', 'qw'];

const newArr7 = (array) => {
    let newArr = [];
    for (let n of array) {
        array.indexOf(n) == array.lastIndexOf(n) ? newArr.push(n) : null;
    }
    return newArr
}

console.log('7 -', newArr7(arr7));

// 8

const count8 = 10; //кількість елементів в масиві
const num8_1 = 2;
const num8_2 = 1;

const newArr8 = (n1, n2, count) => {
    let newArr = [n1, n2];
    for (let n = 2; n < count; n++) { newArr.push(newArr[n - 2] + newArr[n - 1]) }
    return newArr;
}

console.log('8 -', newArr8(num8_1, num8_2, count8));

// 9

// 9.1
console.log('\n--1-- (найкращий варіант) ');

console.log('8 # @ # @ # @ # @');
console.log('7 @ # @ # @ # @ #');
console.log('6 # @ # @ # @ # @');
console.log('5 @ # @ # @ # @ #');
console.log('4 # @ # @ # @ # @');
console.log('3 @ # @ # @ # @ #');
console.log('2 # @ # @ # @ # @');
console.log('1 @ # @ # @ # @ #');
console.log('  A B C D E F G H');

console.log('\n');

// 9.2------------------------
console.log('--2.1--');

// символи 
const char9_1 = '#';
const char9_2 = '@';

//відступи між символами
const space = '   ';

//нижня строка
const abcd9 = ` ${space}A${space}B${space}C${space}D${space}E${space}F${space}G${space}H`;

//строки з символами
const strChars1 = `${space}${char9_1}${space}${char9_2}`.repeat(4);
const strChars2 = `${space}${char9_2}${space}${char9_1}`.repeat(4);

for (let i = 8; i >= 0; i--) {
    console.log(i != 0 ? `${i}` + (i % 2 == 0 ? strChars1 : strChars2) : abcd9);
}

console.log('\n');

//-----теж саме але for в 1 строчку------
console.log('--2.2--');
for (let i = 8; i >= 0; i--) console.log(i != 0 ? `${i}` + (i % 2 == 0 ? strChars1 : strChars2) : abcd9);

console.log('\n');

// 9.3-------через функцію----------

console.log('--3--');
const chessField = (ch1, ch2, c) => {
    if (c == 0) {
        console.log(abcd9);
        return null;
    } else {
        console.log(`${c}` + `${space}${ch1}${space}${ch2}`.repeat(4));
        chessField(ch2, ch1, c - 1);
    }
}
chessField(char9_1, char9_2, 8)