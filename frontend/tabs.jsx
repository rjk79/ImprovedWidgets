import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedTab: 0 }
    this.changeTabs = this.changeTabs.bind(this)
  }

  changeTabs(num) {
    return () => {
      this.setState({selectedTab: num});
    }
  }

  render() {
    const DaTab = this.props.tabs[this.state.selectedTab]

      return (
        <>
        <h1>Tabs</h1>
        <div className="tabSelector">
          <span onClick={this.changeTabs(0)}>one</span>
          <span onClick={this.changeTabs(1)}>two</span>
          <span onClick={this.changeTabs(2)}>three</span>
        </div>
        <div className="tabs">
          {DaTab.title} 
          <br/>
          {DaTab.content} 
        </div>
        
        </>     
      )
    
  }
}

export default Tabs