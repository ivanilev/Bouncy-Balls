'use strict'

// Utility Functions
var Helper = (function(){
    var canvas = document.querySelector('canvas');
    var canvasContext = canvas.getContext('2d');
    var minRadius = 5;
    var maxRadius = 40;

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    
    function dist(x1, y1, x2, y2) {
        const xDist = x2 - x1
        const yDist = y2 - y1
    
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    };
    
    //Truly random color
    //https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    //Prettier random colors
    function randomPrettyColor() {
        var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
        return colors[Math.floor(Math.random() * colors.length)]
    };

    return {
        getRandomColor: getRandomColor,
        getRandomPrettyColor: randomPrettyColor,
        getRandomIntFromRange: randomIntFromRange,
        getDistance: dist,
        canvas: canvas,
        canvasContext: canvasContext,
        minRadius: minRadius,
        maxRadius: maxRadius,
        GRAVITY: 1,
        FRICTION: 0.5
    };

}());

export {Helper};