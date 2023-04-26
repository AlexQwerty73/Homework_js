// 1

const rojalCat = {
    name: "Inokentij Emanuil Georgievich 2",
    age: 5,
    kind: 'Rojal',
    power: 1000,
    speed: 1000,
    money: 100000000,
}
const objItems = (obj) => {
    for (let item in obj) console.log(item + ': ' + obj[`${item}`]);
};
const changeItemValue = (obj, item, value) => obj[item] = value;

// changeItemValue(rojalCat, 'age' , 1);
// objItems(rojalCat);

// 2

const car2_1 = {
    brand: 'BMW',
    year: 2010,
    model: '5',
    maxSpeed: '300',
}
const car2_2 = {
    brand: 'Audi',
    year: 2015,
    model: 'S',
    maxSpeed: '250',
    item: 'item',
}
const comparisonObj = (obj1, obj2) => {
    for (let item in obj1) {
        if (obj2[`${item}`] == undefined) continue;
        console.log(item + ': ' + obj1[`${item}`] + ' or ' + obj2[`${item}`]);
    };
}
const deleteItemObj = (obj, item) => delete obj[`${item}`];

// deleteItemObj(car2_2, 'item');
// comparisonObj(car2_1, car2_2);

// 3

const user3 = {
    name: 'Boris',
    age: 30,
    password: 'qwerty',
    email: 'MyPasswordIsqwert@gmail.com',
    address: 'Green strt 12',
}
const passwordCheck = (user, pass) => user[`password`] == pass ? true : false;

// console.log(passwordCheck(user3, 'qazwsxedc'));

const objItems3 = (obj) => {
    for (let item in obj) console.log(item + ': ' + obj[`${item}`]);
};
// objItems3(user3);

// 4
const internetShop = {
    name: 'Rozez',
    address: 'address',
    list: [
        { product: 'smallCar', power: 10, price: 100 },
        { product: 'smallCar', power: 9, price: 70 },
        { product: 'smallCar', power: 8, price: 120 },
        { product: 'smallCar', power: 7, price: 190 },
        { product: 'smallCar', power: 6, price: 30 },
        { product: 'smallCar', power: 5, price: 60 },
        { product: 'smallCar', power: 4, price: 200 },
    ],
}

const sortPrice = (list) => list.sort((a, b) => a.price - b.price);

// console.log(sortPrice(internetShop.list));

// 5

const postOffice = {
    address: 'address',
    workTime: '8-22',
    packages: [
        { from: 'address', to: 'address' },
        { from: 'address', to: 'address' },
        { from: 'address', to: 'address' },
        { from: 'address', to: 'address' },
    ],
}
const isOpen = (workTime, time) =>  workTime.split('-')[0] <= time && time <= workTime.split('-')[1] ? true : false;

console.log(isOpen(postOffice.workTime, 7));