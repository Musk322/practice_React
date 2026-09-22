import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }
  const deleteNotes = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex  gap-4 lg:w-1/2 flex-col items-start p-10'>
        <h1 className='text-4xl  mb-2 font-bold'>Add Notes</h1>
        {/*Pehla input for heading*/}
        <input
          type='text'
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium outline-none py-2 border-2 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/*Detailed wala input*/}
        <textarea
          type='text'
          placeholder='Write Details'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg:[url('https://th.bing.com/th/id/OIP.EuTBj6LIMN_frWyIVzb1-QHaHa?w=186&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3')']">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-3 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-pink-500 py-1 text-xs rounded font-bold text-white '>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>

  )

}
export default App;