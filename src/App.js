import React from "react";
import Tooltip from "./Tooltip";
import { setShowTooltip, setTooltipPosition } from "./actions";

class App extends React.Component {

  handleMouseHover = (val) => {
    const { dispatch } = this.props.store;
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    dispatch(setShowTooltip(val));
  };

  handlePositionSelection = (val) => {
    const { dispatch } = this.props.store;
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    dispatch(setTooltipPosition(val));
  }

  render() {
    const { showToolTip, value } = this.props.store.getState();
    
    return (
      <div className="app">
        <form className="position-form">
          <span>Choose The Position Of Tooltip</span>
          <input type="radio" name="position" onClick={() => {this.handlePositionSelection('top')}}></input><label>Top</label>
          <input type="radio" name="position" onClick={() => {this.handlePositionSelection('right')}}></input><label>Right</label>
          <input type="radio" name="position" onClick={() => {this.handlePositionSelection('bottom')}}></input><label>Bottom</label>
          <input type="radio" name="position" onClick={() => {this.handlePositionSelection('left')}}></input><label>Left</label>
          <center><button className="button submit-button">CLEAR SELECTION</button></center>
        </form>
        <div className="tooltip-button-div">
        <button
          className="hover-button button"
          onMouseOver={() => {
            this.handleMouseHover(true);
          }}
          onMouseLeave={() => {
            this.handleMouseHover(false);
          }}
        >
          HOVER
        </button>
        <Tooltip showToolTip={showToolTip} value={value} />
        </div>
      </div>
    );
  }
}

export default App;
