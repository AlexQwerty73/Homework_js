// 1

class Product {
    name;
    price;
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }

    discount = (num) => 0 <= num && num <= 100 ? (100 - num) / 100 * this.price : num;
}
// const product1 = new Proscduct('Name', 100);
// console.log(product1.diount(25));

// 2

// class Rectangle {
//     width;
//     height;
//     constructor(w, h) {
//         this.width = w;
//         this.height = h;
//     }
//     perimeter = () => 2 * (this.width + this.height)
//     area = () => this.width * this.height;
//     perimeterAndArea = () => `P: ${this.perimeter()}, A: ${this.area()}`;
// }
// const rec = new Rectangle(100, 10);
// console.log(rec.perimeterAndArea());

// 3

class Client {
    name; email;
    constructor(n, e) {
        this.name = n;
        this.email = e;
    }
    validateEmail = (e) => this.email == e;
}
// const client1=new Client('alex',`alex@gmail.com`);
// console.log(client1.validateEmail(`alex@gmailcom`));

// 4

class Transport {
    brand;
    model;
    constructor(b, m) {
        this.brand = b;
        this.model = m;
    }
    showInfo = () => `Brand: ${this.brand}, Model: ${this.model}`;
}
class Car extends Transport {
    year;
    constructor(b, m, y) {
        super(b, m);
        this.year = y;
    }
    showInfo = () => `B: ${this.brand}, M: ${this.model}, Y: ${this.year}`;
}
class Motorcycle extends Transport {
    maxSpeed;
    constructor(b, m, mS) {
        super(b, m);
        this.maxSpeed = mS;
    }
    showInfo = () => `B: ${this.brand}, M: ${this.model}, MS: ${this.maxSpeed}`;
}

// const car = new Car('brand', 'S', 2000);
// const motorcycle = new Car('brand', 'S', 200);
// console.log(car.showInfo());
// console.log(motorcycle.showInfo());

// 5

class Shape {
    perimeter = () => { };
    area = () => { };
    showInfo = () => { };
}
class Rectangle extends Shape {
    width;
    height;
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }
    perimeter = () => 2 * (this.width + this.height);
    area = () => this.width * this.height;
    showInfo = () => `W:${this.width}, H: ${this.height}`;
}
class Circle extends Shape {
    radius;
    constructor(r) {
        super();
        this.radius = r;
    }
    perimeter = () => 2 * 3.14 * this.radius;
    area = () => 3.14 * this.radius * this.radius;
    showInfo = () => `R:${this.radius}, P: ${this.perimeter()}, A: ${this.area()}`;
}

const rect = new Rectangle(10, 5);
const circle = new Circle(8);
console.log(rect.showInfo());
console.log(circle.showInfo());