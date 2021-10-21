import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import User from './components/User';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Yellow from './components/Yellow';
import Pink from './components/Pink';
import Pagenotfound from './components/Pagenotfound';
import Home from './components/Home';

function App() {
  return (
    <>
    <Menu/>
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route exact path='/User' component={User}/>
      <Route exact path='/Red' component={Red}/>
      <Route exact path='/Blue' component={Blue}/>
      <Route exact path='/Green' component={Green}/>
      <Route exact path='/Yellow' component={Yellow}/>
      <Route exact path='/Pink' component={Pink}/>
      <Route  component={Pagenotfound}/>
      <Route exact path='/Pink' component={Pink}/>
      
    </Switch>
    </> 
  );
}

export default App;

