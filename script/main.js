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
console.log(longestWord(string5));

// 6
// 1 - 33
const letters6 = ' абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'.split('');
const numsArr6 = [21, 4, 7, 9, 15, 26, 0, 2, 0, 31, 25, 0, 7]; //0 = пробіл

const wordFromNumbers = (num) => {
    let word = [];
    for (let n of num) word.push(letters6[n]);
    return word.join('');
}

console.log(wordFromNumbers(numsArr6));

// 7


