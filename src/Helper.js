'use strict'
var Helper = (function(){
    var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

    // Utility Functions
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    
    function dist(x1, y1, x2, y2) {
        const xDist = x2 - x1
        const yDist = y2 - y1
    
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    };

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    };

    return {
        getRandomColor: randomColor,
        getRandomIntFromRange: randomIntFromRange,
        getDistance: dist,
    };

}());

export {Helper};