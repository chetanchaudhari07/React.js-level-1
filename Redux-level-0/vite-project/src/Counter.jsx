import React from "react";
import { useDispatch, useSelector,} from 'react-redux'
import { increment , decrement } from "./Redux/action";

const Counter = ()=>{
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.count);

   return (

    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <pre>{JSON.stringify({count}, null, 2)}</pre>

    </div>

   ) 
}

export default Counter;