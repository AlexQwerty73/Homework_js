'use strict';

let btn1 = new MyButton('Some Text', 'btn lightgreen');
let btn2 = new MyButton('Download');
let btn3 = new MyButton('Click Me');
let btn4 = new MyButton('See More', 'btn lightcoral');

let btn5 = new ColorButton('Color Button', 'btn', 'lightcyan');

btn1.setText('Save Progress');

btn1.show();
btn2.show();
btn3.show();
btn4.show();

btn5.show();