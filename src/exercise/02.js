// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {on, toggle}, `The toggle is ${on ? 'on': 'off'}`)
  })  
}


const ToggleOn = ({on, children}) => {
  if (on) return children
}

const ToggleOff = ({on, children}) => {
  if (!on) return children
}

const ToggleButton = ({on, toggle}) => {
  return <Switch on={on} onClick={toggle} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
