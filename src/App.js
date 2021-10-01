import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";


function App() {

  return (
    <Router >
      <div >
        <Switch >
          <Route exact path="/dashboard" component={Dashboard} />
      
         <Route path="/">
            <Homepage/>
          </Route>

      </Switch>
      </div>
   </Router>
  );
}

export default App;
