import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'

if (process.env.NODE_ENV.trim() === 'development') {
     TestDev.logEnvironment();
}

(function(){
    var canvas, c;
    var Balls;
    var a;
    var App = {
        init: function(){
            canvas = this.getCanvasContext().canvas;
            c = this.getCanvasContext().c;

            canvas.width = innerWidth
            canvas.height = innerHeight

            this.addListeners(); // this. ? -> if error
            this.initObjects();
        },
        getCanvasContext(){
            canvas = document.querySelector('canvas');
            c = canvas.getContext('2d');
            return {canvas, c};
        },
        initObjects: function(){
            Balls = [];
            a = new Ball(randPlaceW, randPlaceH, 10, 'red');
            a.Draw(c);
            
            for (let i = 0; i < 1; i++) {
                var ball;

                var randColor = Helper.getRandomColor();
                var randSize = Helper.getRandomIntFromRange(25,40); 
                var randPlaceW = Helper.getRandomIntFromRange(randSize, canvas.width - randSize);
                var randPlaceH = Helper.getRandomIntFromRange(randSize, canvas.height - randSize);
                var randXVelocity = Helper.getRandomIntFromRange(-2,2);
                var randYVelocity = Helper.getRandomIntFromRange(-2,2);

                ball = new Ball(
                    randPlaceW, randPlaceH, 
                    randYVelocity, randXVelocity, 
                    randSize, randColor
                );
            
                Balls.push(ball);
            }
        },
        addListeners: function(){
            addEventListener('resize', () => {
                canvas.width = innerWidth
                canvas.height = innerHeight

                this.init();
            });
            addEventListener('click', () => {
                this.init();
            });
        },
        render: function(){
            var self = this;

            self.getCanvasContext().c.clearRect(0, 0, canvas.width, canvas.height);
            
            requestAnimationFrame(function(){
                self.render();
                
                Balls.forEach(function(item){
                    item.Update(c);
                });

            });
        }
    }
    
    App.init();
    App.render();
}());