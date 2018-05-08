import React from 'react';
import {render} from 'react-dom';

class FrictionComponent extends React.Component {
    render () {
      return (   
        <input type="range" id="frictionInput" />
//        min="0" max="1" step="0.01"/>
      );
    }
}

export default FrictionComponent