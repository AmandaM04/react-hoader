import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import './App.css';

import AllTheStuff from '../components/AllTheStuff/AllTheStuff';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/MyStuff';
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Login} />
                  <PrivateRoute
                    path="/allthestuff"
                    authed={this.state.authed}
                    component={AllTheStuff} />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register} />
                  <PublicRoute
                    path="/login"
                    authed={this.state.authed}
                    component={Login} />
                  <PrivateRoute
                    path="/mystuff"
                    authed={this.state.authed}
                    component={MyStuff} />
                  <PrivateRoute
                    path="/order/:id"
                    authed={this.state.authed}
                    component={SingleItem} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
