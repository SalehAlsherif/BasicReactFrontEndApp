
import './App.css';
import Table from './Components/Table';
import TableBody from './Components/TableBody';
import TableHeader from'./Components/TableHeader';
import CountriesRadioGroup from './Components/CountriesRadioGroup';
import StateRadioGroup from './Components/StateRadioGroup';
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      validity:"All",
      country:"All",
      phoneNumbers:[]
    };
    this.setValidity = this.setValidity.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.filter=this.filter.bind(this);
  }
  setValidity(event){
    this.setState({
      validity: event.target.value
    })
  }
  setCountry(event){
    this.setState({
      country: event.target.value
    })
  }
  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }
  async filter(){

    var apiUrl="http://127.0.0.1:8080/phoneNumbers?";
    apiUrl+=this.state.country!=="All"?`country=${this.state.country}`:"";
    apiUrl+=this.state.validity!=="All"?`&state=${this.state.validity==="Valid"?true:false}`:"";
    const response= await fetch(apiUrl);
    const data=await response.json();
    this.setState({
      phoneNumbers:data
    }) 
  }
  render() {
    return (
    <>
      <div className="center">
        <Table>
          <TableHeader/>
          <TableBody data={this.state.phoneNumbers} />
        </Table>
      </div>
      <CountriesRadioGroup setCountry={this.setCountry}/>
      <StateRadioGroup setValidity={this.setValidity}/>
      <button className="button" onClick={this.filter}>
        Filter Table
      </button>
    </>
    );
  }
}

export default App;
