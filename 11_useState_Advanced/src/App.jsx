import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(1)

  const btnClicked = () => {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me!</button>
    </div>
  )
}

export default App;