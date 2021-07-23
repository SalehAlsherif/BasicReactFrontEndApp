import React, { Component } from "react";
import '../App.css';
import CountryOption from "./CountryOption";
class CountriesRadioGroup extends Component {
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
    this.props.setCountry(event);
  }



  render() {
    return (
      <div>
          <h3>Choose a country</h3>
          <CountryOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} country="Cameroon"/>
          <CountryOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} country="Ethiopia"/>
          <CountryOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} country="Morocco"/>
          <CountryOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} country="Mozambique"/>
          <CountryOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} country="Uganda"/>
          <CountryOption selectedOption={this.state.selectedOption} onValueChange={this.onValueChange} country="All"/>
      </div>
    );
  }
}

export default CountriesRadioGroup;
