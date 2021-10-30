
import './App.css';
import Menu from './Menu';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import User from './components/User';
import Home from './components/Home';
import Info from './components/Info';

function App() {
  return (
    <>
    
    
    <Menu/>
    <Switch>
      <Route  exact path='/'component={Home}/>
      <Route  exact path='/User'component={User}/>
     <Route  exact path='/Info'component={Info}/>
    </Switch>
    </> 
  );
}

export default App;

