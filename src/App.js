import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./page/main/Main.js"
import Login from "./page/user/Login.js"
import Sign from "./page/user/Sign.js"
import New from "./page/item/New.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/new' element={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;
