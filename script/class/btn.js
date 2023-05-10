class MyButton {
    constructor(text = 'Some Text', btnClass = 'btn') {
        this.text = text;
        this.btnClass = btnClass;
    }

    getText = () => this.text;
    setText = (text) => this.text = text;

    getBtnClass = () => this.btnClass;
    setBtnClass = (val) => this.btnClass = val;

    show = () => document.write(`<button type='button' class='${this.btnClass}'>${this.text}</button>`);
}