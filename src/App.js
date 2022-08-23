import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  a = "Mohit"
  render() {
    return (
      <div>
        Hello class based components {this.a}
      </div>
    )
  }
}
