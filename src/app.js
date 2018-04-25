import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'

require('../src/css/style.css');

if (process.env.NODE_ENV.trim() === 'development') {
     TestDev.logEnvironment();
}

(function(){
    var canvas, canvasContext;
    var Balls;
    var a;
    var App = {
        getWindowSize:function(){
            var d= document, root= d.documentElement, body= d.body;
            var wid= window.innerWidth || root.clientWidth || body.clientWidth, 
            hi= window.innerHeight || root.clientHeight || body.clientHeight ;
            return [wid,hi]
        },
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
            a = new Ball(randPlaceW, randPlaceH, 10, 'red');
            a.Draw(canvasContext);
            
            for (let i = 0; i < 5; i++) {
                var ball;

                var randColor = Helper.getRandomColor();
                var randSize = Helper.getRandomIntFromRange(Helper.minRadius, Helper.maxRadius); 
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
            canvas = Helper.canvas;

            addEventListener('resize', (e) => {
                canvas.width = innerWidth
                canvas.height = innerHeight
                this.init();
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
                    item.Update(Helper.canvasContext);
                });

            });
        }
    }
    
    App.init();
    App.render();
}());