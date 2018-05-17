import React from 'react';
import {render} from 'react-dom';

class ButtonsComponent extends React.Component {
    render () {
      return (   
        <div className="componentContainer" style={{top:'55px'}} >
          <button className="Buttons" id="PlayButton">Play</button>
          <button className="Buttons" id="StopButton">Stop</button>
        </div>
      );
    }
}

export default ButtonsComponent