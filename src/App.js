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
import SignIn from "./pages/SignIn";
import InsertRecipe from "./pages/insertRecipe";
import CreatShoppingCart from "./pages/CreatShoppingCart";
import UserMenu from "./pages/userMenu/userMenu";
import Upload from "./pages/upload/Upload";
import SignUp from "./pages/SignUp/signUp";
import Home from "./pages/home/Home";
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends React.Component {
  render() {
    return (
  <React.Fragment>
  <Router>
    <NavigationBar/>
      <Jumbotron/>
        <Layout>
          <div>
            <Switch>
              <Route path="/sign-in">
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
              <Route path="/Home" component={Home}></Route>
              <Route path="/insert-recipe">
                <InsertRecipe withPrice={true}/>
              </Route>
              <Route path="/creat-shopping-cart">
                <CreatShoppingCart />
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </div>
        </Layout>
      </Router>
    </React.Fragment>
    );
  }
}

export default App;
