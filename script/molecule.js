class Molecule {
    constructor (canvas, Point, numOfpoint=30, numOfLine=3) {
        this.figure = Point;
        this.point = [];
        this.raf;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.numOfpoint = numOfpoint;
        this.speed = 2;
        this.isAnimated = false;
        this.numOfLine = numOfLine;
    }

    animate () {
        this.isAnimated = true;
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); 
        for (let i = 0; i < this.numOfpoint; i++) {
            if (this.point[i]) {
                for (let j = 1; j < this.numOfLine; j++) {
                    if (this.point[i-j]){
                        this.point[i].drow(this.ctx, this.point[i-j].positionX, this.point[i-j].positionY);
                    } 
                    else {
                        this.point[i].drow(this.ctx, this.point[i].positionX, this.point[i].positionY);
                    }
                }
                this.point[i].move();
                this.point[i].checkPosition(this.canvas);
            }
        } 
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }

    start () {
        if (this.isAnimated) return;
        let t = 500;
        for (let i = 0; i < this.numOfpoint; i++) {
            setTimeout(() => {
                this.point[i] = new this.figure();
                this.point[i].setParam(this.speed, this.speed);
            }, t);
            t += Math.random() * 1000;
        }
        this.animate();
    } 
    
    stop () {
        cancelAnimationFrame(this.raf);
        this.isAnimated = false;
    }
}