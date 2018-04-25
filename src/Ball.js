'use strict'
// TODO make this better, maybe a file? Helper?
var gravity = 1;
var friction = 0.89;

class Ball{
    constructor(x, y, dy, dx, radius, color){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = color;
    };

    Update(canvas){
        //If the ball is out of screen apply third law of motion, else apply gravity
        if (this.y + this.radius + this.dy > canvas.canvas.height){
            this.dy = - this.dy * friction;
        }
        else{
            this.dy += gravity;
        }
        //If the ball is out of screen bounce it back
        if (this.x + this.radius + this.dx > canvas.canvas.width || this.x -  this.radius <= 0){
            this.dx = -this.dx;
        }

        //Move the ball and draw new position on canvas on canvas 
        this.y += this.dy;
        this.x += this.dx;

        this.Draw(canvas);
    };

    Draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }
};

export {Ball};