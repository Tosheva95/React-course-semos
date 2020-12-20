import React from 'react'
import './App.css'
import Button from './Button.js'
import Calc from './Calc'
import Counter from './Counter'
import Clock from './Clock'

class App extends React.Component {

  render = () => {
    return (
      <div>
        <h1>Welcome to my first react webpage!</h1>
        <Button greeting='ZDRAVO SEMOS' />
        <Counter />
        <Calc />
        <Clock />
      </div>
    )
  }
}

export default App