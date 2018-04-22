import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Difficult from "./pages/Difficult";
import Prevention from "./pages/Prevention";
import "./styles/common.css";

const App = () => (
  <Router>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/experience' component={Experience}/>
      <Route path='/difficult' component={Difficult}/>
      <Route path='/prevention' component={Prevention}/>
    </Switch>
  </Router>
)

export default App;