import './App.css';
import {Routes, Route} from "react-router-com";
import Main from "./page/Main.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
