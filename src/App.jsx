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

  let existing_sets = 0;
  const [sets, setSets] = useState(
      existing_sets? {"Set": []}
      :
      {
        "My First Set": []
      }
  );

  const [selectedSet, setSelectedSet] = useState(
    existing_sets? "TODO" : "My First Set"
  );

  const addSet = (name) => {
    setSets({
      ...sets,
      [name]: []
    });
  }

  console.log(selectedSet);
  console.log(sets);

  return (
    <>
    <main className="container">
    <Header/>
    <div className="row main-row d-flex">
      <div className="col-12 mb-5">
      <ActionPanel
      sets={sets}
      add_to_set={addSet}
      set_selected_set={setSelectedSet}/>
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
