//import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import enter from "./actions/entry";

function App() {

  const [text,changeText] = useState('');

  const authReview = useSelector(state => state.getAction)
  const dispatchAction = useDispatch();

  return (
    <div className="App">
      <input style={{margin:'10px'}} type="text" placeholder="pswd..." value={text} onChange={(e)=>changeText(e.target.value)}></input>
      <button onClick={()=>{dispatchAction(enter(`${text}`))}}>authenticate</button>
      {authReview===true ? <p style={{margin:'10px'}}>Logged In</p> : <p style={{margin:'10px'}}>Incorrect Pswd</p>}
    </div>
  );
}

export default App;
