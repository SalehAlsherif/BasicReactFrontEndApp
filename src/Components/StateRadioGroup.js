import React, { Component } from "react";
import '../App.css';
import StateOption from "./StateOption";
class StateRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
    this.props.setValidity(event);
  }

  render() {
    return (
      <div>
        <h3>Choose a state</h3>
        <StateOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} state="Valid"/>
        <StateOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} state="Invalid"/>
        <StateOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} state="All"/>
      </div>
    );
  }
}

export default StateRadioGroup;
