import React, {useState, useEffect} from "react";
import './App.css';
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import { selectId } from "./data/dataSlice";
import { useSelector , useDispatch} from "react-redux";


function App() {

  // const gid = useSelector(selectId);
  // const [present, setpresent] = useState(localStorage.getItem("current-user"));
  // const [id, setId] = useState();
  // useEffect(() => {
  //   setpresent(gid)
  // }, [])


  return (
    <Router className="App">
      <div className="container mt-3">
        <Switch >
        {/* {console.log("ssss",present)}
        {present==null ? (
          <Redirect to="/" />
        ) : ( */}
          <Route exact path="/dashboard" component={Dashboard} />
        {/* )} */}

         <Route path="/">
            <div className="row">
              <div className="col-md-8">
                  <h2>Hello</h2>
              </div>
              <div className="col-md-4 my-auto">
                  <Login />
              </div>
            </div>
          </Route>

        {/* {id==null ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/dashboard" component={Dashboard} />
        )} */}

         
      </Switch>
      </div>
   </Router>
  );
}

export default App;
