import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: null,
      temp: null
    }
  }
  // 
  componentDidMount() {
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition( (loc) => {
      // debugger
      lat = loc.coords.latitude;
      long = loc.coords.longitude;
      let key = 'b206e05f1bbf6d521a46b0a11a8438ae';
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${key}&units=imperial`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              city: result.name,
              temp: result.main.temp
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    });

  }

  render() {
    
    return (
      <>
        
        <h1>Weather</h1>
        <div className="weather">
          <h2>{this.state.city}</h2>
          <h2>{this.state.temp}&deg;F</h2>
        </div>
      </>
    )
  }
}

export default Weather;