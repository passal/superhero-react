import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import UserMenu from './pages/userMenu';

class App extends React.Component {
  render() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" ><SignUp /></Route>
                    <Route path="/signIn"><SignIn /></Route>
                    <Route path="/userMenu"><UserMenu /></Route>
                </Switch>
            </Router>
    );
  }
}

export default App;
