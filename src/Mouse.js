'use strict';

var Mouse = (function(){
    let mouse = {
        x: 0, 
        y: 0
    };// = mouse || {x: 0, y: 0};
    let name = 'mouse';
    function getLocation(){
        return mouse || {x:0, y: 0};
    };

    function setLocation(location){
        mouse.x = location.x;
        mouse.y = location.y;
    };

    return{
        getLocation: getLocation,
        setLocation: setLocation,
        name: name
    };
}());

export {Mouse};