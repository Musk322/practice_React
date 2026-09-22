import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'royalblue',
      tag: 'Satisfied'
    },
    {
      img:'https://media.istockphoto.com/id/2148178474/photo/two-hispanic-programmers-collaborating-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=_wHVuIZuJv-FoMVws07hopohS8RKVhHA3PTQOjNEd5c=',
      intro:'',
      color:'pink',
      tag: 'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1674338457396-5d6db9f30f52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29yayUyMHNvZnR3YXJlJTIwZW5naW5uZXJ8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'gray',
      tag: 'Unsatisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1773332598501-f8612761781a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'red',
      tag: 'Underserved'
    }
    
  ]
  return(
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}
export default App