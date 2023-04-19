import { useState } from 'react'
import './App.css'
import Flowers from './compoinent/Galeria1'
import Mario from './compoinent/Img3D'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Flowers/>
      <Mario/>
    </div>
  )
}

export default App
