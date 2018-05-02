import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Regist from "./pages/Regist";
import Login from "./pages/Login";
import Experience from "./pages/Experience";
import Article from "./pages/Article";
import Difficult from "./pages/Difficult";
import Prevention from "./pages/Prevention";
import Lecture from "./pages/Lecture";
import Notes from "./pages/Notes";
import Firends from "./pages/Firends";
import MyCard from "./pages/MyCard";
import Health from "./pages/Health";
import Fealty from "./pages/Fealty";
import Spread from "./pages/Spread";
import "./styles/common.css";

const App = () => (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/regist' exact component={Regist}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/experience' exact component={Experience}/>
        <Route path='/experience/:id' exact component={Article}/>
        <Route path='/difficult' exact component={Difficult}/>
        <Route path='/prevention' exact component={Prevention}/>
        <Route path='/lecture' exact component={Lecture}/>
        <Route path='/notes' exact component={Notes}/>
        <Route path='/firends' exact component={Firends}/>
        <Route path='/mycard' exact component={MyCard}/>
        <Route path='/health' exact component={Health}/>
        <Route path='/fealty' exact component={Fealty}/>
        <Route path='/spread' exact component={Spread}/>
        <Redirect path='/' to='/home' />
      </Switch>
    </Router>
)

export default App;