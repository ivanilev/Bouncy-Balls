
import React from 'react';
import {render} from 'react-dom';

class GravityComponent extends React.Component {
    render () {
      return (   
        <div id = "gravity" class="rangeComponents">
          <label for="gravity">Gravity pull: </label>
          <input class="sliderRange"  type="range" id="gravityInput"/>
        </div>
      );
    }
}

export default GravityComponent