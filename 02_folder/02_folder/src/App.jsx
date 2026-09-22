 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 
 import viteLogo from './assets/vite.svg'
 import heroImg from './assets/hero.png'
 import './App.css'


import card from "./components/card.jsx";
import navbar from "./components/navbar.jsx";
const App =() =>{
  return(
    <div className='parent'>
      <Card/>
      <Navbar/>
    </div>
  )
}

export default App;
