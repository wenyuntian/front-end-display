import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './routes/Index/index'
import ErrorPage from './routes/ErrorPage/index'
import './App.css'
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route component={ErrorPage}></Route>
      </Switch>
    );
  }
}

export default App;
