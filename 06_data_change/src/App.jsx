import React from 'react'
import Card from './components/Card'
import User from './components/User'
const App = () => {
    const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/OIP.DxvJ7aPxI6BI0XTS9yfpCAHaHa?w=156&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.0Y8Hmr7KiAI_InrwDPpj9wHaHI?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.6x6s1sTIRrU8my_FCLwPqwHaFj?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Ko2MIOzzDlWu8a_1Xo8UAQHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.uHrDUCEbFVxRTdSSRjC5_gHaCu?w=304&h=128&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.zDbJfohjoZkSx8i9gj-bYgHaE0?w=268&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.zAqniopSixprJzkQvKkSaQHaJj?w=123&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Tesla",
    datePosted: "1 week ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.mE32TkR-yeG0iVCX94iavwHaEK?w=342&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.lLos5sneIJP5H5uTzqmCNQHaE8?w=224&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    datePosted: "2 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Gurgaon, India"
  }
];



  return(
    <div className='parent'>
      {jobOpenings.map(function(elem ,idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} tag2={elem.tag2} pay={elem.pay}/>
        </div>
      })}
    </div>
  )
}
export default App

