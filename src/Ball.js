'use strict'

import { Helper } from "./Helper";

class Ball{
    constructor(x, y, dy, dx, radius, color){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.radius = radius;
        this.color = color;
    };

    Update(){
        //If the ball is out of screen apply third law of motion, else apply gravity
        if (this.y + this.radius + this.dy > Helper.canvas.height){
            this.dy = - this.dy * Helper.FRICTION;
        }
        else{
            this.dy += Helper.GRAVITY;
        }
        //If the ball is out of screen bounce it back
        if (this.x + this.radius + this.dx > Helper.canvas.width || this.x -  this.radius <= 0){
            this.dx = -this.dx;
        }

        //Move the ball and draw new position on canvas on canvas 
        this.y += this.dy;
        this.x += this.dx;

        this.Draw();
    };

    Draw() {
        var c = Helper.canvasContext;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }
};

export {Ball};