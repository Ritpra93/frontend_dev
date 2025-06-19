import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layouts/Layout'
import Clocks from './components/Clocks'
import Calendar from './components/Calendar'
import Summary from './components/Summary'

function App() {

  return (
    <Layout>
     <Hero/>
     <Clocks/>
     <Calendar/>
     <Summary/>
    </Layout>

    
  )
}

export default App
