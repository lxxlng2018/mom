import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Difficult from "./pages/Difficult";
import Prevention from "./pages/Prevention";
import Lecture from "./pages/Lecture";
import Notes from "./pages/Notes";
import Firends from "./pages/Firends";
import MyCard from "./pages/MyCard";
import Health from "./pages/Health";
import Spread from "./pages/Spread";
import "./styles/common.css";

const App = () => (
  <Router>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/experience' component={Experience}/>
      <Route path='/difficult' component={Difficult}/>
      <Route path='/prevention' component={Prevention}/>
      <Route path='/lecture' component={Lecture}/>
      <Route path='/notes' component={Notes}/>
      <Route path='/firends' component={Firends}/>
      <Route path='/mycard' component={MyCard}/>
      <Route path='/health' component={Health}/>
      <Route path='/spread' component={Spread}/>
    </Switch>
  </Router>
)

export default App;