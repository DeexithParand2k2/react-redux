import React from "react";
import { Link } from 'react-router-dom';

const Admin = ({getFunc}) =>{
    return(
        <p onClick={()=>getFunc('admin')}><Link to='/loginpage'>Admin</Link></p>
    )
}

export default Admin;