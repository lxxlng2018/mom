import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Regist from "./pages/Regist";
import Login from "./pages/Login";
import Experience from "./pages/Experience";
import Difficult from "./pages/Difficult";
import Prevention from "./pages/Prevention";
import Lecture from "./pages/Lecture";
import Notes from "./pages/Notes";
import Firends from "./pages/Firends";
import MyCard from "./pages/MyCard";
import Myinvite from "./pages/Myinvite";
import Myrinvite from "./pages/Myrinvite";
import Health from "./pages/Health";
import Fealty from "./pages/Fealty";
import Spread from "./pages/Spread";
import "./styles/common.css";

const App = () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/regist' component={Regist} />
      <Route path='/home' component={Home} />
      <Route path='/experience' component={Experience} />
      <Route path='/difficult' component={Difficult} />
      <Route path='/prevention' component={Prevention} />
      <Route path='/lecture' component={Lecture} />
      <Route path='/notes' component={Notes} />
      <Route path='/firends' component={Firends} />
      <Route path='/mycard' component={MyCard} />
      <Route path='/myinvite' component={Myinvite} />
      <Route path='/myrinvite' component={Myrinvite} />
      <Route path='/health' component={Health} />
      <Route path='/fealty' component={Fealty} />
      <Route path='/spread' component={Spread} />
    </Switch>
  </Router>
)

export default App;