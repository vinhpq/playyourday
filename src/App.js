import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import Dashboard from "./Dashboard";
import Header from "./Header"

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Switch>
                <Route path="/admin">
                  <Dashboard userType="admin"/>
                </Route>

                <Route path="/">
                  <Dashboard userType="user"/>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
      
    </div>
  );
}

export default App;
