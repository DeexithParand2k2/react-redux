import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import enter from "./actions/entry";

const Loginpage = ({who}) =>{

    const [text,changeText] = useState('');

    const authReview = useSelector(state => state.getAction)
    const dispatchAction = useDispatch();


    return(
        <>
            <p>{who}</p>
            <input type="text" placeholder="pswd..." value={text} onChange={(e)=>changeText(e.target.value)}></input>
            <button onClick={()=>{dispatchAction(enter(`${text}`))}}>authenticate</button>
            {authReview===true ? <p>Logged In</p> : <p style={{color:'red'}}>Incorrect Pswd</p>}
        </>
    )

}

export default Loginpage;