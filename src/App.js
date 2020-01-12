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
          <Navbar/>
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
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </div>
                  </nav>
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
