import React from 'react'

const App = () => {
  const pageScrolling = (elem) => {
    if (elem>0){
      console.log('seedha scrolling');
    }else{
      console.log('ulta scrolling');
    }
    }
    {/*console.log('speed',elem);*/}
  return(
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltay)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

{/*const App = () => {
  return(
    <div>
    <div onMouseUp={(elem) => {
      console.log(elem.clientX);
    }}
    className='box'>Muskan Singh</div>
    </div>
  )
}

{/*const App = () => {
  function inputChanging(val){
    console.log('value is changing',val);
  }

  {/*function btnClicked() {
    console.log('Button is Clicked');
  }
  return(
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value);
      }}
      type='text' placeholder='Enter your name' />
      {/* onChange={function(elem){
        console.log(elem.target.value);
      }}

      {/*<button onClick={()=>{
        console.log('Button is Clicked');
      }}>Click Here</button>
      {/*<button onClick={btnClicked}>Click Me</button>
      <button onClick={btnClicked}>Explore this</button>
    </div>
  )
}*/}
export default App
