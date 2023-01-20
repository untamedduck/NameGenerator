import React from "react"
import Navbar from "./Components/Navbar";
import ElderScrolls from "./Pages/ElderScrolls";
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Altmer from "./Pages/Altmer";
import Argonian from "./Pages/Argonian"
import Radio from "./Components/Radio";
function App() {
  return (
    <div className= "App">
      <Router>
      <Navbar/>
      <Routes>
          <Route path = "/" exact element = {<ElderScrolls/>}/>
          <Route path = "/Altmer" exact element = {<Altmer/>}/>
          <Route path = "/Argonian" exact element = {<Argonian/>}/>
          <Route path = "/test" exact element = {<Radio/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
