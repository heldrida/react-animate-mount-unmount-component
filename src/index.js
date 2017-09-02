import React from 'react'
import { render } from 'react-dom'
import App from './app'

class Parent extends React.Component {
  constructor (props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
    this.state = {
      showChild: true
    }
  }
  buttonClick () {
    this.setState({
      showChild: !this.state.showChild
    })
  }
  render () {
    return (
      <div>
        <App
          onTransitionEnd={this.transitionEnd}
          mounted={this.state.showChild}
        />
        <button onClick={this.buttonClick}>
          {this.state.showChild ? 'Unmount' : 'Mount'}
        </button>
      </div>
    )
  }
}

render(<Parent />, document.getElementById('root'))
