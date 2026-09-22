import  {useState} from 'react'

const App = () => {
    const [num,setNum] = useState([10,20,30])

    const btnClicked = () => {
        const newNum = [...num]
        newNum.push(99)

        setNum(newNum)

    }
    {/*const [num,setNum] = useState({user:'Muskan',age:18})

    const btnClicked = ()=>{
        setNum(prev=>({...prev,age:19}))*/}
       {/* const newNum = {...num};
        newNum.user = 'Archana'

        setNum(newNum)*/}
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={btnClicked}>Click</button>
           {/* <h1>{num.user},{num.age}</h1>
            <button onClick={btnClicked}>Click</button>*/}
        </div>
    )


export default App;
{/*const App = () => {
    const [users,setUsers] = useState(0)

    function increaseNum() {
      setNum(num+1)
    }
    function decreasesNum() {
        setNum(num-1)
    }
    function jump5Num() {
        setNum(num+5)
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increaseNum}>Increase</button>
            <button onClick={decreasesNumNum}>Decreases</button>
            <button onClick={jump5Num}>Increase by 5</button>
        </div>
    )
}

export default App;*/}