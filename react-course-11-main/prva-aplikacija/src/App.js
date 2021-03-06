import React from 'react'
import './App.css'
// import Button from './Button.js'
// import Calc from './Calc'
// import Counter from './Counter'
// import Clock from './Clock'
import Toolbar from './components/Toolbar.js'
// import Users from './components/Users.js'
import Posts from './components/Posts.js'
// import FunCalc from './components/FunCalc'
// import FunClock from './components/FunClock'

const items = [
  'Home',
  'Books',
  'Authors',
  'Favourites'
]

class App extends React.Component {

  render = () => {
    return (
      <div>
        {/* <h1>Welcome to my first react webpage!</h1>
        <Button greeting='ZDRAVO SEMOS' />
        <Counter />
        <Calc /> */}
        {/* <Clock /> */}
        {/* <FunCalc /> */}
        {/* <FunClock /> */}
        <Toolbar menuItems={items} />
        <br />
        {/* <Users /> */}
        <Posts />
      </div>
    )
  }
}

export default App