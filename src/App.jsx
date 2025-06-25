import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PFooter from './components/PFooter'
import Header from './components/Header'
import ActionPanel from './components/ActionPanel'
import CardInterface from './components/CardInterface'


const createCard = ( question = "", answer = "") => ({
    question,
    answer

});

const createSet = (set_name="SetName", id=createSetID()) => ({
  id: id,
  set_name: set_name,
  cards: [createCard()]

})

// I will probably change this in the future.
function createSetID() {
  return Date.now().toString();
}

function clamp(num, min, max) {
    return Math.min(Math.max(num,min),max);
}



function App() {

  const [sets, setSets] = useState(
    () => {
      let id = createSetID();
      
      return {[id]: createSet("My First Set", id)}
    }

  );

  const [currentCard,setCurrentCard] = useState(0);

  const [selectedSet, setSelectedSet] = useState(Object.keys(sets)[0]);


  const switchToSet = (set_name) => {
    setCurrentCard(0);
    setSelectedSet(set_name);

  }


  const renameSet = (id,name) => {
    setSets({
      ...sets,
      [id]: {
        ...sets[id],
        set_name: name
      }
    })
    
  }

  const addSet = (name) => {
    let new_set = createSet(name);
    setSets({
      ...sets,
      [new_set.id]: new_set
    });
    setSelectedSet(new_set.id);

  }

  const addCard = (id) => {
    setSets(
      {
        ...sets,
        [id]: {
          ...sets[id],
          cards: [...sets[id].cards, createCard()]
        }
      }


    )
    setCurrentCard(sets[selectedSet].cards.length);
  }

  const deleteCurrentCard = (id) => {
    if (sets[selectedSet].cards.length < 2) return;

    setSets(
      {
        ...sets,
        [id]:{
          ...sets[id],
          cards: sets[id].cards.filter((c,i)=> {return i != currentCard})
        }
      }
    )


    if (sets[selectedSet].cards.length-1 == currentCard){
      setCurrentCard(
        clamp(currentCard-1,0,sets[selectedSet].cards.length-1));
    }

  }

  const updateCurrentCard = (id,k,v) => {
    setSets({
      ...sets,
      [id]: {
        ...sets[id],
        cards: sets[id].cards.map((c,i)=> i==currentCard? {...c, [k]:v}:c)
      }
    })
  }
  


  return (
    <>
    <main className="container">
    <Header/>
    <div className="row main-row d-flex">

      <div className="col-12 mb-5">
      <ActionPanel
      sets={sets}
      add_to_set={addSet}
      set_selected_set={switchToSet}/>
      </div>

      <div className="col-12">
      <CardInterface
      sets={sets}
      cards={sets[selectedSet].cards}
      renameSetFunc={renameSet}
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
