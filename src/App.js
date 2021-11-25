import React from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Quiz from "./components/qiuzmain";
import Nineq from "./components/componentquiz/nineq";
import Eightq from "./components/componentquiz/eight";
import {AuthProvider} from './components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route  path="/signup" component={SignUp}/>
          <Route  path="/quiz" component={Quiz}/>
          <Route  path="/nineq" component={Nineq}/>
          <Route  path="/eight" component={Eightq}/>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
