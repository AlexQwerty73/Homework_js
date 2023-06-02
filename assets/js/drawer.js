export class Drawer {
    canvas = null;
    context = null;
    colors = [
        'red', 'green', 'blue', 'orange', 'lightgray', 'purple',
        'bisque', 'lavender', 'navy', 'silver', 'darkcyan'
    ];
    canvasWidth = 700;
    canvasHeight = 450;
    constructor() {
        this.initContext();
        this.initCanvas();
    }
    initContext() {
        const canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }
    initCanvas() {
        const logo = document.getElementById('logo');
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(logo, 100, 25, 500, 400);
    }
    buildAxios(g) {
        g.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        g.lineWidth = 2;

        g.fillStyle = '#808080';
        g.fillRect(270,180,160,10);
        
        g.fillStyle = '#A9A9A9';
        g.fillRect(300,50,100,100);
        g.fillRect(290,155,120,150);

        g.fillStyle = '#C0C0C0';
        g.fillRect(330,40,40,10);
        g.fillRect(290,80,10,20);
        g.fillRect(400,80,10,20);
        g.fillRect(320,150,60,5);

        g.fillStyle = '#FFFFF0';
        g.fillRect(320,70,20,20);
        g.fillRect(360,70,20,20);
        g.fillRect(320,120,60,10);
        g.fillRect(320,220,60,70);

        g.fillStyle = '#C0C0C0';
        g.fillRect(260,180,20,100);
        g.fillRect(420,180,20,100);
        
        g.fillRect(310,305,30,100);
        g.fillRect(360,305,30,100);
        
        g.fillStyle = '#808080';
        g.fillRect(260,200,20,5);
        g.fillRect(260,210,20,5);
        g.fillRect(260,220,20,5);
        g.fillRect(260,230,20,5);
        g.fillRect(260,240,20,5);
        g.fillRect(260,250,20,5);
        
        g.fillRect(420,200,20,5);
        g.fillRect(420,210,20,5);
        g.fillRect(420,220,20,5);
        g.fillRect(420,230,20,5);
        g.fillRect(420,240,20,5);
        g.fillRect(420,250,20,5);
        
        g.fillRect(310,320,30,5);
        g.fillRect(310,330,30,5);
        g.fillRect(310,340,30,5);
        g.fillRect(310,350,30,5);
        g.fillRect(310,360,30,5);
        g.fillRect(310,370,30,5);
        
        g.fillRect(360,320,30,5);
        g.fillRect(360,330,30,5);
        g.fillRect(360,340,30,5);
        g.fillRect(360,350,30,5);
        g.fillRect(360,360,30,5);
        g.fillRect(360,370,30,5);
    }
}