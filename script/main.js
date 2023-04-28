// setTimeout

// 1

const func1_1 = () => setTimeout(() => console.log('рядок'), 5000);
// func1_1();

// 2
const list = [
    { name: "Alex", index: 1 },
    { name: "Alex", index: 2 },
];
let newList = [];

const getData1_2 = setTimeout(() => newList = list, 10000);

// setInterval

// 1

const timeToEndDay = setInterval(() => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    console.log(23 - h, 'годин', 59 - m, 'хвилин', 59 - s, 'секунд');
}, 5000);
clearInterval(timeToEndDay);

// Завдання з об'єктом Date

// 1

const time = () => {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    return (h + ':' + m + ':' + s);
};
// console.log(time());

// 2

const getDate = () => {
    const d = new Date().getDate();
    let m = new Date().getMonth();
    const y = new Date().getFullYear();
    return (d + '.' + ++m + '.' + y);
}
// console.log(getDate());

const getDaysToNJ = () => {
    const nj = new Date(`December 31 ${new Date().getFullYear()}`).getTime() / 1000 / 60 / 60 / 24
    const now = new Date().getTime() / 1000 / 60 / 60 / 24;
    const h = new Date().getHours();
    const m = new Date().getMinutes();

    const daysToNJ = Math.floor((nj - now)) + ':' + (23 - h) + ':' + (59 - m);
    return daysToNJ;
}
console.log(getDaysToNJ(), 'to NJ');