import { useState } from 'react'
import Card from "./components/card.jsx";
import './App.css';

const App =() =>{
  return (
    <div className="parent">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App;