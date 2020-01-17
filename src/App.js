import React, {useState} from 'react';
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
import CartResult from "./pages/cartResult/cartResult";
import Upload from "./pages/upload/Upload";
import SignUp from "./pages/SignUp/signUp";
import {LandingPage} from "./pages/landingPage/landingPage";
import Home from "./pages/home/Home";
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

var user = null;
var connected = false;



class App extends React.Component {
  user = {credits: 10, name: "Michael"};
  render() {
    return (
  <React.Fragment>
    {!connected &&
    <Router>
      <NavigationBar user={null}/>
        <div>
          <Switch>
            <Route path="/signIn">
              <Jumbotron user={user}/>
              <Layout>
                <SignIn/>
              </Layout>
            </Route>
            <Route path="/signUp">
              <Jumbotron user={user}/>
              <Layout>
                <SignUp/>
              </Layout>
            </Route>
            <Route path="/">
              <LandingPage/>
            </Route>
          </Switch>
        </div>
    </Router>
    }
    {connected &&
    <Router>
      <NavigationBar user={user}/>
      <Jumbotron user={user}/>
      <Layout>
        <div>
          <Switch>
            <Route path="/upload">
              <div>
                <div className="App">
                  <div className="Card">
                    <Upload/>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/userMenu"><UserMenu/></Route>
            <Route path="/insert-recipe">
              <InsertRecipe withPrice={true}/>
            </Route>
            <Route path="/creat-shopping-cart">
              <CreatShoppingCart/>
            </Route>
            <Route path="/cartResult" component={CartResult}></Route>
            <Route path="/">
              <UserMenu/>
            </Route>
          </Switch>
        </div>
      </Layout>
    </Router>
    }
    </React.Fragment>
    );
  }
}

export default App;
