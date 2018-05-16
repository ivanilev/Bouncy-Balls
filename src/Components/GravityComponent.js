import React from 'react';
import {render} from 'react-dom';
import { Helper } from '../Helper';

class GravityComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      minValue: 0.05,
      maxValue: 1,
      step: 0.05,
      currentValue: 0.05
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({currentValue: this.state.minValue});
  }

  handleChange(name, event){
    let value = event.target.value;
    if(name === "rangeChanged"){
      this.setState({currentValue:value});
      Helper.GRAVITY = value;
    }
  }
    
  render(){
    return (
      <div id="gravity" class="rangeComponents">
        <label for="gravity">Gravity pull: </label>
        <input type="range" 
          value={this.state.currentValue} 
          min={this.state.minValue} 
          max={this.state.maxValue} 
          step={this.state.step}  
          onChange={this.handleChange.bind(this, "rangeChanged")}
        />
      </div>
    );
  }
}

export default GravityComponent