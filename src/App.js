import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clarifai from 'clarifai';
import PizzaForm from './components/PizzaForm/PizzaForm';
import PizzaReko from './components/PizzaReko/PizzaReko';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'e67db2cf29de47db8e768f6beeb34bc1'
});
// const image = document.getElementById('inputimage');
const pizza = <h1 className="rotate-315 bg-dark-green">C'est une pizza</h1>
const notpizza = <h1 className="rotate-315 bg-dark-red">Ce n'est pas une pizza</h1>

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  // displayPizza = (pizza) => {
  //   console.log(pizza);
  //   this.setState({pizza})
  // }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FOOD_MODEL, 
      this.state.input)
      .then(response => {
        const concept = response.outputs[0].data.concepts[0].name
        if (concept === 'pizza') {
          return ReactDOM.render(pizza, document.getElementById("pizza"));
        } else {
          return ReactDOM.render(notpizza, document.getElementById("pizza"));
        }
      }) 
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="animated fadeInLeft title1">P I Z Z A</h1>
        <h1 className="animated fadeInRight title2">W I Z A R D</h1>
        <PizzaForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <div className="pizza center grow" id="pizza"></div>
        <PizzaReko imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
