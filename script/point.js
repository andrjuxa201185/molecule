class Point {
    constructor () {
      this.positionX = 50;
      this.positionY = 50;
      this.speedY = 1;
      this.speedX = 1;
      this.color = "brown";
      this.size = 5;
    }

    setParam(speedY = 3, speedX = 3){
      this.speedY = Math.random() * speedY;
      this.speedX = Math.random() * speedX;
      this.positionY = 50 + Math.random() * 500;
      this.positionX = 50 + Math.random() * 800;
      this.colorSquare = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    drow(ctx, x, y){
      ctx.fillStyle = this.color;

      ctx.beginPath();
      ctx.arc(this.positionX, this.positionY, this.size, 0, 6);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(this.positionX, this.positionY);
      ctx.lineTo(x , y);
      ctx.lineTo(x + 1, y + 1);
      ctx.fill();
    }

    move(){
      this.positionY += this.speedY;  
      this.positionX += this.speedX;   
    }

    checkPosition(elem){
      let width = elem.clientWidth;
      let height = elem.clientHeight;
      if(this.positionY >= height-50 || this.positionY < 50 ) {
        this.speedY = -this.speedY;
        this.size = this.size==5?3:5;
      }     
      if(this.positionX >= width-50 || this.positionX < 50 ) {
        this.speedX = -this.speedX;
      }     
    }
  }

