import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'
import {Mouse} from './Mouse'

//require('../src/css/style.css')

var isDevEnv = (process.env.NODE_ENV.trim() === 'development');
if (isDevEnv) {
     TestDev.logEnvironment();
}


var Game = function(){
    var canvas, canvasContext;
    var Balls = [];

    function init(){
        var cc = Helper().getCanvasAndContext();
        // let w = document.getElementById('rightSide').width;
        // let h = document.getElementById('rightSide').height;
        canvas = cc.canvas || {};
        canvasContext = cc.canvasContext || {};

        canvas.width = 320;//w * (9/10);
        canvas.height = 320;//h * (9/10);
        
        addListeners();
        initObjects();
    };
    function initObjects(){     
        for (let i = 0; i < 3; i++) {
            
            let randColor = isDevEnv ? Helper().getRandomPrettyColor() : Helper().getRandomColor();
            let randSize = Helper().getRandomIntFromRange(Helper().minRadius, Helper().maxRadius); 
            let randXVelocity = Helper().getRandomIntFromRange(-2,2);
            let randYVelocity = Helper().getRandomIntFromRange(-2,2);

            let randX = Helper().getRandomIntFromRange(randSize, canvas.width - randSize);
            let randY = Helper().getRandomIntFromRange(randSize, canvas.height - randSize);

            if (i!==0){   
                for (let j = 0; j < Balls.length; j++) {
                    //if it's overlapping on spawn place it somewhere else
                    if (Helper().getDistance(randX, randY, Balls[j].x, Balls[j].y)  < Helper().maxRadius * 2){
                        randX = Helper().getRandomIntFromRange(randSize, canvas.width - randSize);
                        randY = Helper().getRandomIntFromRange(randSize, canvas.height - randSize);

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
    };
    function addListeners(){
        addEventListener('resize', (e) => {
            init();
        });
        addEventListener('mousemove', (e) => {
         //   let __canvasBounds = canvas.getBoundingClientRect();
            
            // Mouse().setLocation({
            //     x: e.clientX - __canvasBounds.left,
            //     y: e.clientY - __canvasBounds.top
            // });
        });/*
        canvas.addEventListener('click', (e) => {

            Balls.forEach(function(item){
                let _mouse = Mouse.getLocation();
                let distBetweenMouseAndBall = Helper().getDistance(_mouse.x, _mouse.y, item.x, item.y);

                if(distBetweenMouseAndBall < item.radius) {
                    if (isDevEnv){console.log('ball clicked');}
                }
            });

            if (isDevEnv){console.log('canvas clicked')};
            e.stopPropagation();
        });*/
    }
    function render(){
        var self = this;
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        
        requestAnimationFrame(function(){
            self.render();
            
            Balls.forEach(function(item){
                item.Update(Balls);
            });

        });
    }

    return{
        init: init,
        render: render
    }
};

export {Game};