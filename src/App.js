import './App.css';
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Switch >

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

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
      </Switch>
      </div>
   </Router>
  );
}

export default App;
