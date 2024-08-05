import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]= useState(0)

  // let counter= 0

  const addValue = () => {
    // counter = counter + 1
    if(counter<=19){
      setCounter(counter + 1)

      /*
      Note: Here when we click that button, our value is changed to (+1+1+1+1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      */

    }
  }

  const removeValue = () => {
    // counter = counter - 1
    if (counter >= 1) {
      setCounter(counter - 1)
    } 
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
