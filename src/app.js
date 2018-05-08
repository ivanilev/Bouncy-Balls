
import {TestDev} from './test-dev';
import {PubSub} from './PubSub';
import MainPage from './MainPage';

import StartComponent from "./StartComponent";
import StopComponent from './StopComponent';
import GravityComponent from './GravityComponent';
import FrictionComponent from './FrictionComponent';

import React from 'react';
import {render} from 'react-dom';
import CanvasComponent from './CanvasComponent';
import {hui, Helper} from "./Helper";
import {Game} from './Game';
require('../src/css/style.css');


(function(){
    let leftSide = document.getElementById('LeftSide');
    let rightSide = document.getElementById('RightSide');
    render (
        <div id='right_side_container'>
            <CanvasComponent/>
        </div>,
        rightSide
    );
    
    render(
        <div id='left_side_container'>
            <MainPage/>
            <StartComponent/>
            <StopComponent/>
            <GravityComponent/>
            <FrictionComponent/>
        </div>, 
        leftSide
    );

    let canvas = Helper().getCanvasAndContext().canvas;
//    let helper = Helper();
 //   let _canvas = helper.getCanvas();
  //  console.log(_canvas);
    console.log('canvas should not be undefined: ');
    console.log(canvas);
    let game = Game();
    game.init();
    game.render();
    //let val = Helper;
    // let $el = $('#MainPage');
    
    
    // let $button = document.getElementById('Pla1y');

    // function showCanvas() {
    //     alert('hui');
    // }

    // $button.on('click', showCanvas);
    // PubSub.Subscribe('PLAYBUTTONCLICKED', showCanvas);
    
}());
