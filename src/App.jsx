import { useState } from 'react'
import './App.css'
import Flowers from './compoinent/Galeria1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Flowers/>
    </div>
  )
}

export default App
