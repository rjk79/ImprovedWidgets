import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    
    super(props)
    this.state = {
      names: [],
      search: ""
    }
    this.searchName = this.searchName.bind(this)
  }

  searchName(event) {
      
      let matched = this.props.names.filter(el => el.indexOf(event.target.value) === 0) //matched is an array
      
      this.setState({ names: matched,
                      search: event.target.value
      })
      
      
    
  }

  render() {
      
    let matchedNames;
    if (!this.state.names.length) {
      matchedNames = this.props.names.map((name, index) =>
        <li key={index}>{name}</li>
      )
    }
    else {
      
      matchedNames = this.state.names.map( (name, index) =>
        <li key={index}>{name}</li>
      )
    }

    return (
      <>
        <h1>Autocomplete</h1>
        <div className="autocomplete">
          <form action="" > 
            <input type="text" value={this.state.search} onChange={this.searchName}/>
          </form>

          <ul>
            {matchedNames}
          </ul>
        </div>
      </>
    )
  }
}

export default AutoComplete;

//method