
import TitleComponent from './Components/TitleComponent';

import ButtonsComponent from './Components/ButtonsComponent';

import GravityComponent from './Components/GravityComponent';
import FrictionComponent from './Components/FrictionComponent';
import CanvasComponent from './Components/CanvasComponent';

import React from 'react';
import {render} from 'react-dom';

import {Helper} from "./Helper";
import {Game} from './Game';
import {TestDev} from './test-dev';
import {PubSub} from './PubSub';

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
            <TitleComponent/>
            <GravityComponent/>
            <FrictionComponent/>
            <ButtonsComponent/>
        </div>, 
        leftSide
    );

    Helper.setCanvasAndContext();
    let game = Game();
    game.init();
    game.render();
    
}());
