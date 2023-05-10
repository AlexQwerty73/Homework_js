class ColorButton extends MyButton {
    constructor(text, btnClass = 'btn', color) {
        super(text, btnClass);
        this.color = color;
    }
    getColor = () => this.color;
    setColor = (val) => this.color = val;
    
    show = () => document.write(`<button type='button' class='${this.btnClass} ${this.color}'>${this.text}</button>`);
}