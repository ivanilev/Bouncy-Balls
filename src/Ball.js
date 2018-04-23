'use strict'
var Ball = (function(){
    //internal properties
    var _x;
    var _y;
    var _radius;
    var _color;

    //Pseudo constructor implementation  
    function _constructor(x,y,radius,color){
        _x = x;
        _y = y;
        _radius = radius;
        _color = color;
    };
    _constructor();

    // Functions
    function draw(c){
        c.beginPath();
        c.arc(_x, _y, _radius, 0, Math.PI * 2, false);
        c.fillStyle = _color;
        c.fill();
        c.closePath();
    }

    function update(){
        draw();
    }

    return {
        x: _x,
        y: _y,
        radius: _radius,
        color: _color
    };

})();

export {Ball};