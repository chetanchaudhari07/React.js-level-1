import { useReducer, useState } from 'react'

import './App.css'

const initialState = {
  isVisible : false
}

const reducer =(state , action) =>{
 switch (action.type){
  case 'toogleVisibility':
    return {...state, isVisible : !state.isVisible}

    default:
      return state;
 }


}

function App() {

  const [state , dispatch] = useReducer(reducer, initialState)
  

  return (
    <>
    <div>
      <button onClick={()=> dispatch({type : 'toogleVisibility'})}>hidden message</button>
    </div>

    {state.isVisible && <h1>Home Page</h1>}
      
    </>
  )
}

export default App
