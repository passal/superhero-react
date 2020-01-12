import React from 'react';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignIn from './pages/SignIn';
import UserMenu from './pages/userMenu/userMenu';
import Upload from "./pages/upload/Upload";
import SignUp from "./pages/SignUp/signUp";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
        <div>
          {/*<Navbar/>*/}
          <div className={"photo"}>
          {/*<img className={"photo"} src={"https://unsplash.com/photos/oiIJ5jGijdQ/download"}/>*/}
          </div>
          <Router>
          <div >
            <Switch>
              <Route exact path="/" ><SignUp/></Route>
              <Route path="/signIn">
                <SignIn/>
              </Route>
              <Route path="/users">
                <h1>Users</h1>
              </Route>
              <Route path="/upload">
                <div>
                <div className="App">
                  <div className="Card">
                    <Upload />
                  </div>
                </div>
                </div>
              </Route>
              <Route path="/userMenu"><UserMenu /></Route>
              <Route path="/doron">
                <h1 className="display-1">Doron Passal</h1>
              </Route>
            </Switch>
          </div>
        </Router>
          </div>
    );
  }
}

export default App;
