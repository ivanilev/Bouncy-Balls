
import React from 'react';
import {render} from 'react-dom';

class CanvasComponent extends React.Component {
    render () {
      return (   
        <canvas id='canvas'></canvas>
      );
    }
}

render(
  <CanvasComponent/>,
  document.getElementById('RightSide')
);

export default CanvasComponent