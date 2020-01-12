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
import Upload from "./pages/upload/Upload";

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" ><SignUp /></Route>
              <Route path="/signIn">
                <SignIn/>
              </Route>
              <Route path="/users">
                <h1>Users</h1>
              </Route>
              <Route path="/upload">
                <div className="App">
                  <div className="Card">
                    <Upload />
                  </div>
                </div>
              </Route>
              <Route path="/userMenu"><UserMenu /></Route>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
