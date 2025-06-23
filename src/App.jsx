import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PFooter from './components/PFooter'
import Header from './components/Header'
import ActionPanel from './components/ActionPanel'
import CardInterface from './components/CardInterface'


const createCard = ( question, answer) => ({
    question,
    answer

});

function clamp(num, min, max) {
    return Math.min(Math.max(num,min),max);
}


function App() {

  let existing_sets = 0;

  const [currentCard,setCurrentCard] = useState(0);

  const [selectedSet, setSelectedSet] = useState(existing_sets? "TODO" : "My First Set");

  const [sets, setSets] = useState(
      existing_sets? {"Set": []}
      :
      {
        "My First Set": [createCard("","")]
      }
  );

  const addSet = (name) => {
    setSets({
      ...sets,
      [name]: [createCard("","")]
    });
  }

  const addCard = (id) => {
    setSets({
      ...sets,
      [id]: [...sets[id], createCard("","")]
    })
    setCurrentCard(cards.length);
  }

  const deleteCurrentCard = (id) => {
    let cards = sets[id];
    if (cards.length < 2) return;



    setSets({
      ...sets,
      [id]: sets[id].filter((c,i)=> {return i != currentCard})
    })

    if (cards.length-1 == currentCard){
      setCurrentCard(clamp(currentCard-1,0,cards.length-1));
    }

  }

  const updateCurrentCard = (id,k,v) => {
    console.log(id,k,v);
    setSets({
      ...sets,
      [id]: sets[id].map( (c,i) =>
        i == currentCard? {...c, [k]:v} : c
      )

    });
  }

  
  let cards = sets[selectedSet];
  console.log("Sets", sets);
  console.log("Selected Set:", selectedSet);
  console.log("Cards:", cards);

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
      <CardInterface
      cards={cards}
      deleteCardFunc={deleteCurrentCard}
      addCardFunc={addCard}
      updateCardFunc={updateCurrentCard}
      card_set_id={selectedSet}
      card_index={currentCard}
      card_index_setter={setCurrentCard}/>
      </div>

    </div>

    </main>
    <PFooter/>
    </>
  )
}

export default App
