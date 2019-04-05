import React, { Component } from 'react';
import Contentpage from './Contentpage';
import New from './New';
import './App.css';
import { Route, Switch } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      <Route path='/' render = {()=><Routes />} />
      
      </div>
    );
  }
}


const Routes = () =>{
  return(
    <Switch>
      <Route exact path='/' component={New}/>
      <Route path='/contentpage' component={Contentpage} />
    </Switch>
  )
}

export default App;
