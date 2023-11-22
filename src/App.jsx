import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
