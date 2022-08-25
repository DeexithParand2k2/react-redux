import React from "react";
import { Link } from 'react-router-dom';

const Guest = ({getFunc}) =>{
    return(
        <p onClick={()=>getFunc('guest')}><Link to='/loginpage'>Guest</Link></p>
    )
}

export default Guest;