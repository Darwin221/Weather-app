import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
    }

    this.getWeatherData = this.getWeatherData.bind(this);
  }
componentDidMount() {
console.log("Page did load")
this.getWeatherData();
}
  //print
getWeatherData = () => {

  const self = this;
  axios ({
    url:  "https://api.openweathermap.org/data/2.5/weather?q=Las+Vegas&appid=83b7f1bab3d05e248e5d700f3abc725d&units=imperial",
    method: "GET" 
  })
  .then(function(results){
    console.log(results);
    const weather = results.data.main.temp;

    self.setState({
      temperature:
      weather
    })
  })
  .catch(function(error){
   console.log(error);
  })  
   
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            temperature: {this.state.temperature

            }
          </p>
        </header>
      </div>
    );
  }

}

export default App;
