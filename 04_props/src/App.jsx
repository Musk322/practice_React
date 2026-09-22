import React from 'react';
import Card from './components/card';

const App =() =>{
  return (
    <div className='parent'>
      <Card user='Muskan Singh' age={18} img='https://th.bing.com/th/id/OIP.PqgeF2SjkZjKiLyjqZGT6QHaEo?w=303&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'/>
      <Card user='Harshi Prakash' age={19} img='https://th.bing.com/th/id/OIP.FF-s6UIBB563XYAmXgdRJgHaEo?w=272&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3'/>
      <Card user='Diksha Jaiswal' age={19} img='https://th.bing.com/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?w=303&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'/>
    </div>
  )
}


export default App;
