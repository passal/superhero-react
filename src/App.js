import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignIn from "./pages/SignIn";
import InsertRecipe from "./pages/insertRecipe";

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/sign-in">
                <SignIn/>
              </Route>
              <Route path="/users">
                <h1>Users</h1>
              </Route>
              <Route path="/insert-recipe">
                <InsertRecipe withPrice={true}/>
              </Route>
              <Route path="/creat-shopping-cart">
                <InsertRecipe withPrice={false}/>
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
