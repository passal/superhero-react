import React, {useState, Fragment} from 'react';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from "react-router-dom";
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


function App(props) {

    const[result,setResult] = useState({});
    //const [currentUser, setCurrentUser] = useState({);}
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const [isConnected, setIsConnected] = useState(!!currentUser.id);
    //const isConnected = !!currentUser.id;

    const logOut = () => {
        localStorage.setItem('currentUser', JSON.stringify({}));
        setIsConnected(!isConnected);
        console.log("inside logOut")
    }
    const updateResult = (result) => {
        setResult(result);
        return;
    };
    console.log("isConnected ", isConnected)
    console.log("currentUser",currentUser)
    console.log("resultsss",result);

    return (
        //
        <React.Fragment>
            {!isConnected &&
            <Router>
                <NavigationBar currentUser={currentUser} logOut={logOut}/>
                <div>
                    <Switch>
                        <Fragment>
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
                            <Route exact path="/">
                                <LandingPage/>
                            </Route>
                        </Fragment>
                    </Switch>
                </div>
            </Router>
            }
            {isConnected &&
            <Router>
                <NavigationBar currentUser={currentUser} logOut={logOut}/>
                <Jumbotron currentUser={currentUser}/>
                <Layout>
                    <div>
                        <Switch>
                            <Fragment>
                                <Route path="/upload">
                                    <div>
                                        <div className="App">
                                            <div className="Card">
                                                <Upload currentUser={currentUser}/>
                                            </div>
                                        </div>
                                    </div>
                                </Route>
                                <Route path="/userMenu"><UserMenu/></Route>
                                <Route path="/insert-receipt">
                                    <InsertReceipt withPrice={true} currentUser={currentUser}/>
                                </Route>
                                <Route path="/create-shopping-cart">
                                    <CreateShoppingCart updateResult={updateResult} currentUser={currentUser}/>
                                </Route>
                                <Route path="/cartResult"><CartResult Result={result}/></Route>
                            </Fragment>
                        </Switch>
                    </div>
                </Layout>
            </Router>
            }
        </React.Fragment>
    );
}

export default withRouter(App);
