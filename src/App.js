import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Sum from './Sum';
import Scroll from './Scroll';
import Particles from 'react-particles-js';


const particleOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}




class App extends Component {
  render() {
    return (
      <div className="App moving-clouds">
      	<Particles className='particles'
          params={particleOptions} 
        />

       <header>  <Heading />  </header>
        <br/>
        <br/>
        <Scroll className="Houssem">

        </Scroll>
      </div>
    );
  }
}

export default App;
