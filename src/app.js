
import CanvasComponent from './Components/CanvasComponent';

import TitleComponent from './Components/TitleComponent';
import GravityComponent from './Components/GravityComponent';
import FrictionComponent from './Components/FrictionComponent';
import ButtonsComponent from './Components/ButtonsComponent';

import React from 'react';
import {render} from 'react-dom';

import {Helper} from "./Helper";
import {Game} from './Game';
import {TestDev} from './test-dev';
import {PubSub} from './PubSub';

require('../src/css/style.css');
require('../src/css/slidersStyle.css');
require('../src/css/buttonsStyle.css');



(function(){
    let leftSide = document.getElementById('LeftSide');
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
