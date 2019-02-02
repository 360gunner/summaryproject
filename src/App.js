import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Posts from './Posts';
import Sum from './Sum';
import Scroll from './Scroll';
import Particles from 'react-particles-js';


const particleOptions = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 800,
      }
    },
    line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 1
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
        <br/><br/>
        <Posts />
        </div>
    );
  }
}

export default App;
