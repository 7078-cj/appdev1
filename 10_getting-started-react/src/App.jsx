import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>About Me</h1>
        <h4>Name:</h4> <span>Ceejay S. Santos</span>
        <h4>Course/Year:</h4> <span>BS Information Technology 3rd Year</span>
        <h4>Fun Fact:</h4> <span>I like going to the gym.</span>
      </div>

      <div>
        <h4>Why i want to learn react:</h4>
        <p>
          I want to learn React because it is a popular JavaScript library for building user interfaces, and it allows for the creation of dynamic and interactive web applications. 
          Learning React will enhance my skills as a developer and open up more opportunities in the tech industry.
          also it has a large community and a wealth of resources available, making it easier to find support and learn best practices.
        </p>
      </div>
    </>
  )
}

export default App
