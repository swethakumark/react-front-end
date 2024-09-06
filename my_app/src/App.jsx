import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from './componets/Signup'
import Login from './componets/Login'
import Nav from './componets/Nav'
import { Route ,Routes} from 'react-router-dom'
import State from './componets/State'
import Counter from './componets/Counter'
import Welcome from './componets/Welcome'
import Api from './componets/Api'
import Pokemon from './componets/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      {/* <h1>welcome react</h1> */}
      <Routes>
      <Route path='/' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/s' element={<State />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/welcome1' element={<Welcome />} />
        <Route path='/api' element={<Api />} />
        <Route path='/poke' element={<Pokemon />} />
      </Routes>
      
      
      

    </>
  )
}

export default App
