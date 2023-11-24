import { useState } from 'react'
import '../styles/App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar />
      </div>
      <div>
        <MainContent />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      <div>
        <Footer />
      </div>
      </div>
      
    </>
  )
}

export default App
