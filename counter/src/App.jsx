import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vote, setVote] = useState(0)
  const upvote=()=>{
    if(vote<20){
      setVote(vote+1)
    }
  }
  const downvote=()=>{
    if(vote>0){
      setVote(vote-1)
    }
  }

  return (
    <>
        <h1>Voting is On</h1>
        <h2>Current vote is {vote}</h2>
        <button onClick={upvote}> upvote </button>
        <br/>
        <button onClick={downvote}> downvotevote </button>
    </>
  )
}


export default App
