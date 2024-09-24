import { useReducer, useState } from 'react'

import './App.css'

const initialState ={ count : 0};

const counterReduce = (state, action) =>{
  switch (action.type){
    case 'Increment':
      return { count : state.count + 1};

    case 'Decrement':
      return { count : state.count - 1};

    default :
    return state;
  }
}

function App() {

  const [state , dispatch] = useReducer(counterReduce , initialState);
  

  return (
    <>
     <div className='Counter'>
      <h1>Count : {state.count} </h1>
      <div className='boxButton'>
        <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
      </div>
     </div>
    </>
  )
}

export default App
