import React from 'react'
import './App.css'
import Nabvar from './components/Nabvar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';


function App() {
 

  return (
    <>
      <div>
      <Nabvar />
      <Home/>
      <Experiance/>
      <Projects/>
      
      <About/>
      <Contact/>

      <Footer/>
      </div>
      <Toaster />

    </>
  )
}

export default App
