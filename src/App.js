import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Layout from "./components/Layout";
import Index from "./pages/Index";
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
import Myinvite from "./pages/Myinvite";
import Myrinvite from "./pages/Myrinvite";
import Health from "./pages/Health";
import Fealty from "./pages/Fealty";
import Spread from "./pages/Spread";
import Share from "./pages/Share";
import Sharep from "./pages/Sharep";
import HeadShort from "./pages/HeadShort";
import PublicVedio from "./pages/PublicVedio";
import Lists from "./pages/Lists";
import HelpContent from "./pages/HelpContent";
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
      <Route path='/share' component={Share} />
      <Route path='/sharep/:sharecode' component={Sharep} />
      <Route path='/headshort' component={HeadShort} />
      <Route path='/lists/:type' component={Lists} />
      <Route path='/read/:id' component={Article} />
      <Route path='/help/:id' component={HelpContent} />
      <Route path='/public_vedio' component={PublicVedio} />
      <Route path='/about' component={PublicVedio} />
      <Route path='/' component={Index} />
    </Switch>
  </Router>
)

export default App;