import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Main from "./page/Main.js"
import Login from "./page/user/Login.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
