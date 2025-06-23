import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Layout from './components/layouts/Layout'
import Clocks from './components/Clocks'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from './utils'

function App() {
  const [name, setName] = useState('Ritesh')
  const [birthDate, setBirthDate] = useState('2005-06-15')
  const [lifeExpectancy, setLifeExpectancy] = useState(80)
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(calculateTimeLeft(birthDate, lifeExpectancy))



  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  return (
    <Layout>
     <Hero name = {name} data={data}/>
     <Clocks data={data}/>
     <Calendar lifeExpectancy={lifeExpectancy} data = {data}/>
     <Summary lifeExpectancy = {lifeExpectancy} birthDate ={birthDate} />
    </Layout>

    
  )
}

export default App
