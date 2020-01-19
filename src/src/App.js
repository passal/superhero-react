import React, {useState, Fragment} from 'react';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import SignIn from "./pages/SignIn";
import UserMenu from "./pages/userMenu/userMenu";
import CartResult from "./pages/cartResult/cartResult";
import Upload from "./pages/Upload/Upload";
import SignUp from "./pages/SignUp/signUp";
import {LandingPage} from "./pages/landingPage/landingPage";
import InsertReceipt from "./pages/insertReceipt";
import CreateShoppingCart from "./pages/CreateShoppingCart";
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

var user = {id: 4, username: "Michael", password:"1234", email:"gmail.con", credits: 10, area:"Tel-Aviv North"};
var result = [{store: 'Shufersal Ramat Aviv', products: [ 'Milk (1 Liter bottle)', 'Ground Beef (Kilograms)' ], price: 38},
  {store: 'SuperYoda Tel-Aviv', products: [ 'Eggs' ], price: 24}];


function App() {
  const [currentUser, setCurrentUser] =
      useState(null);
  const isConnected = currentUser!=null;
  const [userCartResult, setUserCartResult] = useState(result);
  console.log("isConnected ", isConnected)
  console.log("currentUser",currentUser)
  const logOut = () => {
    setCurrentUser(null)
    console.log("here")
  }
  return (
      <React.Fragment>
        {!isConnected &&
        <Router>
          <NavigationBar currentUser={currentUser} logOut={logOut}/>
          <div>
            <Switch>
              <Route path="/signIn">
                <Jumbotron currentUser={currentUser}/>
                <Layout>
                  <SignIn/>
                </Layout>
              </Route>
              <Route path="/signUp">
                <Jumbotron currentUser={currentUser}/>
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
        {isConnected &&
        <Router>
          <NavigationBar currentUser={currentUser}/>
          <Jumbotron currentUser={currentUser}/>
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
                <Route path="/insert-receipt">
                  <InsertReceipt withPrice={true}/>
                </Route>
                <Route path="/create-shopping-cart">
                  <CreateShoppingCart setUserCartResult={setUserCartResult}/>
                </Route>
                <Route path="/cartResult"><CartResult userCartResult={userCartResult}/></Route>
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

export default App;
