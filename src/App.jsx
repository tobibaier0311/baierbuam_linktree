import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Template } from './components/template'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Template/>
    </div>
  )
}

export default App
