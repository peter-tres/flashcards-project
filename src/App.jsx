import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PFooter from './components/Pfooter'
import Header from './components/Header'
import ActionPanel from './components/ActionPanel'
import CardDisplay from './components/CardDisplay'

import {Modes} from './Modes'


function App() {
  const [mode, setMode] = React.useState(Modes.STUDY);

  return (
    <>
    <main className="container">
    <Header/>
    <div className="row main-row d-flex">
      <div className="col-12">
      <ActionPanel mode={mode} setMode={setMode}/>
      </div>
      <div className="col-12">
      <CardDisplay mode={mode}/>


      </div>
    </div>

    </main>
    <PFooter/>
    </>
  )
}

export default App
