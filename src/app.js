import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'

require('../src/css/style.css');

if (process.env.NODE_ENV.trim() === 'development') {
     TestDev.logEnvironment();
}

(function(){
    'use strict'
    var canvas, canvasContext;
    var Balls;
    var a;
    var App = {
        init: function(){
            canvas = Helper.canvas;
            canvasContext = Helper.canvasContext;

            canvas.width = innerWidth * (9/10);
            canvas.height = innerHeight * (9/10);

            this.addListeners(); // this. ? -> if error
            this.initObjects();
        },
        initObjects: function(){
            Balls = [];
           
            
            for (let i = 0; i < 10; i++) {
                let randColor = Helper.getRandomColor();
                let randSize = Helper.getRandomIntFromRange(Helper.minRadius, Helper.maxRadius); 
                let randXVelocity = Helper.getRandomIntFromRange(-2,2);
                let randYVelocity = Helper.getRandomIntFromRange(-2,2);

                let randX = Helper.getRandomIntFromRange(randSize, canvas.width - randSize);
                let randY = Helper.getRandomIntFromRange(randSize, canvas.height - randSize);

                if (i!==0){
                    for (let j = 0; j < Balls.length; j++) {
                        //if they're overlapping
                        let distanceBetweenCurrentAnd
                        if (Helper.getDistance(randX, randY, Balls[j].x, Balls[j].y)  < Helper.maxRadius * 2){
                            randX = Helper.getRandomIntFromRange(randSize, canvas.width - randSize);
                            randY = Helper.getRandomIntFromRange(randSize, canvas.height - randSize);

                            j = -1;
                        }

                    }
                }

                let ball = new Ball(
                    randX, randY, 
                    randYVelocity, randXVelocity, 
                    randSize, randColor
                );
            

                Balls.push(ball);
            }
        },
        addListeners: function(){
            canvas = Helper.canvas;

            addEventListener('resize', (e) => {
                canvas.width = innerWidth
                canvas.height = innerHeight
                //this.init();
            });
            canvas.addEventListener('click', (e) => {
                this.init();

                console.log('canvas clicked');
                e.stopPropagation();
            });
        },
        render: function(){
            var self = this;
            Helper.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            
            requestAnimationFrame(function(){
                self.render();
                
                Balls.forEach(function(item){
                    item.Update(Balls);
                });

            });
        }
    }
    
    App.init();
    App.render();
}());