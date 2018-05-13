import React from 'react';
import {render} from 'react-dom';

class FrictionComponent extends React.Component {
    render () {
      return (   
        <div id="friction" class="rangeComponents">
          <label for="friction">Friction: </label>
          <input class="sliderRange" type="range" id="frictionInput" min="1" max="5"/>
        </div>
      );
    }
}

export default FrictionComponent