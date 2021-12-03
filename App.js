import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

// function Greeting(bebas) {
//   return <h1>Hai {bebas.name} </h1>
// }

class App extends Component {
    state = {
      count: 1
    }
    addButton = () => {
      this.setState({count: this.state.count + 1})
    }
    render() {
      return (
        <div className="App">
          {/* <header><Greeting name="lucky"/></header> */}
        {[...Array(this.state.count)].map(() => (
          <button onClick={this.addButton}>Klik Me</button>
          
        ))}
        </div>
    );
  }
  
}

const nama = "Lucky Fauzi";
const element = <h1> Haii {nama} Have A Nice Day!</h1>;
reactDom.render(element, document.getElementById('lat'));




export default App;
