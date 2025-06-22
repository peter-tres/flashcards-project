import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PFooter from './components/PFooter'
import Header from './components/Header'
import ActionPanel from './components/ActionPanel'
import CardInterface from './components/CardInterface'



function App() {


  const [sets, setSets] = useState(
      {
        "Set1": [],
        "Set2": [],
        "Set3": []
      }
  );


  const addSet = (name) => {
    setSets({
      ...sets,
      name: []
    })
  }


  return (
    <>
    <main className="container">
    <Header/>
    <div className="row main-row d-flex">
      <div className="col-12 mb-5">
      <ActionPanel sets={sets} setter={addSet} />
      </div>
      <div className="col-12">
      <CardInterface/>
      </div>
    </div>

    </main>
    <PFooter/>
    </>
  )
}

export default App
