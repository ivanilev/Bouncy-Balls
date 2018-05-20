import React from 'react';
import {render} from 'react-dom';

class ButtonsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlayToggled: false,
      isStopToggled: true,
      isPlayHovered: false,
      isStopHovered: false,
      playButtonStyle: {backgroundColor: '#343434'},
      stopButtonStyle: {backgroundColor: '#171717'},
    };

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handlePlayHovered = this.handlePlayHovered.bind(this);
    this.handlePlayUnhovered = this.handlePlayUnhovered.bind(this);
  }

  handlePlayHovered(){
    this.setState({
      isPlayHovered: true, 
      playButtonStyle:  {backgroundColor: '#222222'} 
    })
  };
  handlePlayUnhovered(){
    this.setState({
      isPlayHovered:false,
      playButtonStyle: {backgroundColor: '#343434'}      
    })
  };
  handleStopHovered(){
    this.setState({
      isStopHovered: true,
      stopButtonStyle: {backgroundColor: '#222222'}
    })
  };
  handleStopUnhovered(){
    this.setState({
      isStopHovered:false,
      stopButtonStyle: {backgroundColor: '#343434'}
    })
  };
  handlePlayClick(){
    this.setState({
      isPlayToggled: true, 
      isStopToggled: false,
      playButtonStyle: {backgroundColor: '#171717'},
      stopButtonStyle: {backgroundColor: '#343434'}
    });
  };
  handleStopClick(){
    this.setState({
      isPlayToggled: false, 
      isStopToggled: true,
      stopButtonStyle: {backgroundColor: '#171717'},
      playButtonStyle: {backgroundColor: '#343434'}
    });
  };
  render () {
    this.state.playButtonStyle = this.state.isPlayToggled ? {backgroundColor: '#171717'} : this.state.playButtonStyle;
    this.state.stopButtonStyle = this.state.isStopToggled ? {backgroundColor: '#171717'} : this.state.stopButtonStyle;
   
    
    return (   
      <div className="componentContainer" style={{top:'55px'}} >
        <button 
          className="Buttons" id="PlayButton"
          onClick={this.handlePlayClick}
          onMouseEnter={this.handlePlayHovered.bind(this, "PlayButtonHovered")} 
          onMouseLeave={this.handlePlayUnhovered.bind(this, "PlayButtonUnHovered")} 
          style={this.state.playButtonStyle}>
            
        </button>
        <button className="Buttons" id="StopButton" 
        onClick={this.handleStopClick}
        onMouseEnter={this.handleStopHovered.bind(this, "StopButtonHovered")} 
        onMouseLeave={this.handleStopUnhovered.bind(this, "StopButtonUnHovered")}
        style={this.state.stopButtonStyle}>
         
        </button>
      </div>
    );
  }
}

export default ButtonsComponent