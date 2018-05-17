import React from 'react';
import {render} from 'react-dom';
import { Helper } from '../Helper';

class FrictionComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        minValue: 0.1,
        maxValue: 1,
        step: 0.1,
        currentValue: 0.1
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
      Helper.FRICTION = 1 - this.state.currentValue;
    }
  }
    
  render(){
    return (
      <div className="componentContainer" style={{top:'40px'}} >
        <label htmlFor="friction">Friction:</label>
        <input type="range" className="slider" 
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

export default FrictionComponent