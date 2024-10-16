import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Renter from './Components/Renter/Renter'
import Work from './Components/Work/Work'
import Us from './Components/Us/Us' 
import Footer from './Components/Footer/Footer'
import Test from './Components/Test/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Renter/>
      <Work/>
      <Us/>
      <Test/>
      <Footer/>

    </>
  )
}

export default App
