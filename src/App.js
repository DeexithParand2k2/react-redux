import Admin from "./Admin";
import { useState } from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Guest from "./Guest";
import Loginpage from "./Loginpage";

function App() {

  const [retString,changeString] = useState('')

  const someName = (retStr) =>{
    changeString(retStr)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={
              <>
                <h1>Home Page</h1>
                <Admin getFunc={someName}/>
                <Guest getFunc={someName}/>
              </>
            }>
            </Route>

            <Route path='/loginpage' element={
                  <Loginpage who={retString}/>
                }  >
            </Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
