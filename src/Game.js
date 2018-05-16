import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'
import {Mouse} from './Mouse'

var isDevEnv = (process.env.NODE_ENV.trim() === 'development');
if (isDevEnv) {
     TestDev.logEnvironment();
}


var Game = function(){
    var canvas, canvasContext;
    var Balls = [];
    let _mouse = Mouse();

    function init(){
        let canvasSize = Helper.getCanvasContainerSize();

        canvas = Helper.canvas || {};
        canvasContext = Helper.canvasContext || {};

        canvas.width = canvasSize.width * (9/10);
        canvas.height =  canvasSize.height * (9/10);
        
        if (Balls.length === 0){
            addListeners();
        }
        initObjects();
    };
    function initObjects(){
        Balls = [];
        for (let i = 0; i < 3; i++) {
            
            let randColor = Helper.getStartingColors();
            let randRadius = Helper.randomIntFromRange(Helper.minRadius, Helper.maxRadius); 
            let randXVelocity = Helper.randomIntFromRange(-2,2);
            let randYVelocity = Helper.randomIntFromRange(-2,2);

            let randX = Helper.randomIntFromRange(randRadius*2, canvas.width - randRadius*2);
            let randY = Helper.randomIntFromRange(randRadius*2, (canvas.height/2) - randRadius*2);

            if (i!==0){   
                for (let j = 0; j < Balls.length; j++) {
                    //if it's overlapping on spawn place it somewhere else
                    if (Helper.getDistance(randX, randY, Balls[j].x, Balls[j].y)  < Helper.maxRadius * 2){
                        randX = Helper.randomIntFromRange(randRadius*2, canvas.width - randRadius*2);
                        randY = Helper.randomIntFromRange(randRadius*2, (canvas.height/2) - randRadius*2);

                        j = -1;
                    }

                }
            }

            let ball = new Ball(
                randX, randY, 
                randYVelocity, randXVelocity, 
                randRadius, randColor
            );
            
            Balls.push(ball);
        }
    };
    function addListeners(){
        addEventListener('resize', (e) => {
            init();
        });
        addEventListener('mousemove', (e) => {
           let __canvasBounds = canvas.getBoundingClientRect();
            
            _mouse.setLocation({
                x: e.clientX - __canvasBounds.left,
                y: e.clientY - __canvasBounds.top
            });
        });
        canvas.addEventListener('click', (e) => {
            e.stopPropagation();
            Balls.forEach(function(item){
                let distBetweenMouseAndBall = Helper.getDistance(_mouse.getLocation().x, _mouse.getLocation().y, item.x, item.y);

                if(distBetweenMouseAndBall < item.radius) {
                    item.color = Helper.getRandomColor();
                    
                }
                
                if (isDevEnv){
                    console.log(
                        " y = " + item.y + 
                        " velocity = " + item.velocity.y +
                        " radius = " + item.radius + 
                        " color = " + item.color
                    );
                }
            });
            if (isDevEnv){
                console.log('FRICTION: ' + Helper.FRICTION);
                console.log('GRAVITY: ' + Helper.GRAVITY);
            }
        });
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