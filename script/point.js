class Point {
    constructor () {
      this.positionX = 50;
      this.positionY = 50;
      this.speedY = 1;
      this.speedX = 1;
      this.color = "rgb(34, 138, 124)";
      this.size = 5;
    }

    setParam(speedY = 3, speedX = 3){
      this.speedY = -1 + Math.random() * speedY;
      this.speedX = -1 + Math.random() * speedX;
      this.positionY = Math.random() * 700;
      this.positionX = Math.random() * 1550;
      this.colorSquare = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    drow(ctx, x, y){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.positionX, this.positionY, this.size, 0, 6);
      ctx.fill();
      
      if (x && y) {
        ctx.beginPath();
        ctx.moveTo(this.positionX, this.positionY);
        ctx.lineTo(x , y);
        ctx.lineTo(x + 1, y + 1);
        ctx.fill();
      }
    }

    move(){
      this.positionY += this.speedY;  
      this.positionX += this.speedX;   
    }

    checkPosition(elem){
      let width = elem.clientWidth;
      let height = elem.clientHeight;
      if(this.positionY >= height+200 || this.positionY < -200 ) {
        this.speedY = -this.speedY;
        // this.size = this.size==5?3:5;
      }     
      if(this.positionX >= width+200 || this.positionX < -200 ) {
        this.speedX = -this.speedX;
        // this.size = this.size==5?3:5;
      }     
    }
  }

