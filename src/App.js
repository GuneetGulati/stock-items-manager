import React, {useState, useEffect} from "react";
import './App.css';
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import { selectId } from "./data/dataSlice";
import { useSelector , useDispatch} from "react-redux";


function App() {

  return (
    <Router >
      <div >
        <Switch >
          <Route exact path="/dashboard" component={Dashboard} />
      
         <Route path="/">
            <div className="row">
              <div className="col-md-8">
                  <h2>Hello</h2>
              </div>
              <div className="col-md-4">
                  <Login />
              </div>
            </div>
          </Route>

      </Switch>
      </div>
   </Router>
  );
}

export default App;
