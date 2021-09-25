import React from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {AuthProvider} from './components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route  path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
