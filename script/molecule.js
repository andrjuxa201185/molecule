class Molecule {
    constructor (canvas, Point) {
        this.figure = Point;
        this.point = [];
        this.raf;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.countOfpoint = 50;
        this.speed = 4;
        this.isAnimated = false;
    }

    animate () {
        this.isAnimated = true;
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight); 
        
        for (let i = 0; i < this.countOfpoint; i++) {
            if (this.point[i]) {
                if (this.point[i-1]){
                    this.point[i].drow(this.ctx, this.point[i-1].positionX, this.point[i-1].positionY);
                }  
                if (this.point[i-2]){
                    this.point[i].drow(this.ctx, this.point[i-2].positionX, this.point[i-2].positionY);
                } 
                if (this.point[i-3]){
                    this.point[i].drow(this.ctx, this.point[i-3].positionX, this.point[i-3].positionY);
                } 
                else {
                    this.point[i].drow(this.ctx, this.point[i].positionX, this.point[i].positionY);
                }
                this.point[i].move();
                this.point[i].checkPosition(this.canvas);
            }
        } 
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }

    start () {
        if (this.isAnimated) return;
        for (let i = 0; i < this.countOfpoint; i++) {
            this.point[i] = new this.figure();
            this.point[i].setParam(this.speed, 1);
        }
        this.animate();
    }

   
}