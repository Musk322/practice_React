import React from 'react'
import {useState} from 'react'

const App = () => {
  const [count,setCount] = useState(0)

  const increament =()=>{
    setCount(count+1)
  }
  const decreament =()=>{
    if (count>0){
      setCount(count-1)
    }
  }
  const reset =()=>{
    setCount(0)
  }
  return(
    <div id='info'>
      <h1>Count:{count}</h1>
      <button class='btn' onClick={increament}>+</button>
      <button class='btn' onClick={decreament}>-</button>
      <button class='btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default App;

