import React from 'react'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import {action,Originals} from'./url'
import './App.css'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost  url={Originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={action} title="Action" isSmall/>
    </div>
  )
}

export default App