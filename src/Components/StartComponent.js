import React from 'react';
import {render} from 'react-dom';

class StartComponent extends React.Component {
    render () {
      return (   
        <div id="Start" class="buttonComponent">
          <button>Play</button>
        </div>
      );
    }
}

export default StartComponent