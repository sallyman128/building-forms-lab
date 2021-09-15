// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.name} placeholder="Add Name" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput