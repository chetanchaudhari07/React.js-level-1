import { useReducer, useState } from 'react'
import './App.css'



const initState = {
  theme: 'light',
}

const themeReducer = (state, action) => {

  switch (action.type) {
    case 'ToggleTheme':
      return {
        ...state, theme: state.theme === 'light' ? 'dark' : 'light',
      }

    default:
      return state;

  }

}




function App() {



  const [state, dispatch] = useReducer(themeReducer, initState);

  const ToggleTheme = () => {
    dispatch({ type: 'ToggleTheme' });
  };





  return (
    <>
      <div className={state.theme}>

        <div>
          <button onClick={ToggleTheme}>{state.theme === 'light' ? 'Dark': 'Light'}</button>
        </div>

        <div>
          <h1>Welcome to Home </h1>
          <p>Make your products</p>
        </div>


      </div>


    </>
  )
}

export default App
