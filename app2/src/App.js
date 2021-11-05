import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// import {Switch} from 'react-router'
import Home from './Home';
import About from "./About";

const App = () => {
  console.log('test app2')
  return (
   <Router>
     {/* <Switch> */}
     
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
     
    {/* </Switch> */}
   </Router>
  )
}

export default App;

