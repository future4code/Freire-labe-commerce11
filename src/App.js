import React, { Component } from 'react'
import './App.css';
import Produtos from './components/Produtos'


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Produtos/>
      </div>
    )
  }
}
