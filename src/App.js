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
      <Layout>
          <Route path='/login' exact component={Login} />
          <Route path='/regist' exact component={Regist} />
          <Route path='/home' exact component={Home} />
          <Route path='/experience' exact component={Experience} />
          <Route path='/difficult' exact component={Difficult} />
          <Route path='/prevention' exact component={Prevention} />
          <Route path='/lecture' exact component={Lecture} />
          <Route path='/notes' exact component={Notes} />
          <Route path='/firends' exact component={Firends} />
          <Route path='/mycard' exact component={MyCard} />
          <Route path='/myinvite' exact component={Myinvite} />
          <Route path='/myrinvite' exact component={Myrinvite} />
          <Route path='/health' exact component={Health} />
          <Route path='/fealty' exact component={Fealty} />
          <Route path='/spread' exact component={Spread} />
          <Route path='/share' exact component={Share} />
          <Route path='/sharep/:sharecode' exact component={Sharep} />
          <Route path='/headshort' exact component={HeadShort} />
          <Route path='/lists/:type' exact component={Lists} />
          <Route path='/read/:id' exact component={Article} />
          <Route path='/help/:id' exact component={HelpContent} />
          <Route path='/public_vedio' exact component={PublicVedio} />
          <Route path='/about'exact component={PublicVedio} />
          <Route path='/' exact component={Index} />
      </Layout>
    </Switch>
  </Router>
)

export default App;