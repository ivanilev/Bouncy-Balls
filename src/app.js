import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'

if (process.env.NODE_ENV.trim() === 'development') {
     TestDev.logEnvironment();
}

(function(){
    var canvas, c;
    var Balls = [];
    var a;
    var App = {
        init: function(){
            canvas = document.querySelector('canvas');
            c = canvas.getContext('2d');

            canvas.width = innerWidth
            canvas.height = innerHeight

            this.addListeners(); // this. ? -> if error
            this.initObjects();
        },
        initObjects: function(){
            
            a = new Ball(randPlaceW, randPlaceH, 10, 'red');
            // Ball.CreateBall(150,150,10,'red');
            a.Draw(c);
            
            for (let i = 0; i < 300; i++) {
                var a;

                var randPlaceW = Helper.getRandomIntFromRange(0, canvas.width);
                var randPlaceH = Helper.getRandomIntFromRange(0, canvas.height);
                var randColor = Helper.getRandomColor();
                var randSize = Helper.getRandomIntFromRange(5,15);

                a = new Ball(randPlaceW, randPlaceH, randSize, randColor);// Ball.CreateBall(150,150,10,'red');
            
                Balls.push(a);
            }
        },
        addListeners: function(){
            addEventListener('resize', () => {
                canvas.width = innerWidth
                canvas.height = innerHeight

                this.render();
            });
        },
        render: function(){
                        
            // items.forEach(function(item){
            //     copy.push(item)
            //   });
            
            // for (let i=0; i<items.length; i++) {
            //     copy.push(items[i])
            //   }


            //clear screen
            c.clearRect(0, 0, canvas.width, canvas.height)
            Balls.forEach(function(item){
                item.Draw(c);
                console.log(item);
            });
            //render stuff
            //a.Draw(c);

        }
    }
    App.init();
    App.render();
}());