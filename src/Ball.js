'use strict'

import { Helper } from "./Helper";

class Ball{
    constructor(x, y, dy, dx, radius, color){
        this.x = x;
        this.y = y;
        this.velocity = {
            y: dy,
            x: dx
        };
        this.radius = radius;
        this.color = color;
        this.weight = radius/Helper.maxRadius;
    };

    Update(Balls){
        //If the balls have colided resolve collision
        for (let i = 0; i < Balls.length; i++) {
            if (this === Balls[i]){continue;}
            if (Helper.getDistance(this.x, this.y, Balls[i].x, Balls[i].y) < this.radius + Balls[i].radius) {
                Helper.resolveCollision(this,Balls[i]);
            }
        }

        //If the ball is out of screen apply third law of motion, else apply gravity
        if (this.y + this.radius + this.velocity.y > Helper.canvas.height) {
            this.velocity.y = - this.velocity.y * Helper.FRICTION;
        }
        else {
            this.velocity.y += Helper.GRAVITY * this.weight;
        }

        //If the ball is out of screen bounce it back
        if (this.x + this.radius + this.velocity.x > Helper.canvas.width || this.x - this.radius <= 0) {
            this.velocity.x *= -1;
        }
        if (this.y + this.radius + this.velocity.y > Helper.canvas.height || this.y - this.radius <= 0) {
            this.velocity.y *= -1;
        }

        //Move the ball and draw new position on canvas on canvas 
        this.y += this.velocity.y;
        this.x += this.velocity.x;

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