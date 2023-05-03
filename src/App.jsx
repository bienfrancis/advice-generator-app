import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='inner-wrapper h-screen grid place-content-center'>
      <Card/>
    </div>
  )
}

export default App