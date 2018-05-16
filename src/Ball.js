'use strict'

import { Helper } from "./Helper";
import { Mouse } from './Mouse';

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
    hasColidedwithBall(ball){
        if (Helper.getDistance(this.x, this.y, ball.x, ball.y) < this.radius + ball.radius) {
            return true;
        }
        else {
            return false;
        }
    };

    Update(Balls){
        //If balls have colided - resolve collision
        for (let i = 0; i < Balls.length; i++) {
            if (this === Balls[i]){continue;}
            if (this.hasColidedwithBall(Balls[i])) {
                Helper.resolveCollision(this,Balls[i]);
            }
        }

        //If ball is out of border -> bounce back and add friction;
        if (this.x + this.radius>= Helper.canvas.width){
            console.log('Touching right border');
            this.x = Helper.canvas.width - this.radius;
            this.velocity.x = this.velocity.x * -1 * Helper.FRICTION;
        }
        if (this.x - this.radius <= 0){
            console.log('Touching left border');
            this.x = this.radius;
            this.velocity.x = this.velocity.x * -1 * Helper.FRICTION;
        }
        if (this.y + this.radius + this.velocity.y > Helper.canvas.height){
            console.log('Touching bottom border');
            this.y = Helper.canvas.height - this.radius;
            this.velocity.y = this.velocity.y * -1 * Helper.FRICTION;
        }
        if (this.y - this.radius + this.velocity.y <= 0){
            console.log('Touching top border');
            this.y = this.radius;
            this.velocity.y = this.velocity.y *-1 * Helper.FRICTION;
        }

        //Apply gravity
        this.velocity.y += Helper.GRAVITY * this.weight;
      

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