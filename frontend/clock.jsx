import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    const time = new Date()
    this.setState({time})
  }

  componentDidMount () {
    setInterval(this.tick, 1000)
  }

  componentWillUnmount() {

  }
  
  render() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true};

    const formatted = this.state.time.toLocaleDateString("en-US", options)
    const formattedTime = formatted.match(/(\d+\:\d+\:\d+)/)[0]

    let formattedDate = formatted.match(/(.+)\,/)[0]

    formattedDate = formattedDate.slice(0, formattedDate.length - 1)
    
    return (
      <>
      
      <h1>Clock</h1>
      <div className="clock">
        Time:
        <h2>{formattedTime}</h2>
        Date:
        <h3>{formattedDate}</h3>
      </div>
      </>
      )
  }
}

export default Clock;