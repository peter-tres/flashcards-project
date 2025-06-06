import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PFooter from './components/Pfooter'
import Header from './components/Header'
import ActionPanel from './components/ActionPanel'
import CardDisplay from './components/CardDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="container min-vh-100">
    <Header/>
    <div className="row h-100">
      <div className="col-12">
      <ActionPanel/>

      </div>
      <div className="col-12">
      <CardDisplay/>

      </div>
    </div>

    </main>
    <PFooter/>
    </>
  )
}

export default App
