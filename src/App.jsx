import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <div className='inner-wrapper h-screen grid place-content-center sm:px-4 xs:px-5'>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
