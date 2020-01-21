import React, {useState, Fragment} from 'react';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, withRouter, HashRouter, Redirect } from "react-router-dom";
import './App.css';
import SignIn from "./pages/SignIn";
import UserMenu from "./pages/userMenu/userMenu";
import CartResult from "./pages/cartResult/cartResult";
import Upload from "./pages/Upload/Upload";
import SignUp from "./pages/SignUp/SignUp";
import {LandingPage} from "./pages/LandingPage/LandingPage";
import InsertReceipt from "./pages/insertReceipt";
import CreateShoppingCart from "./pages/CreateShoppingCart";
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

const App = () => {

    const [result, setResult] = useState({});
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));
    const isConnected = !!currentUser.id;

    const logOut = () => {
        localStorage.setItem('currentUser', JSON.stringify({}));
        setCurrentUser({});
    };

    const updateResult = (result) => {
        setResult(result);
    };

    return (
        <React.Fragment>
            {!isConnected &&
            <HashRouter>
                <NavigationBar currentUser={currentUser} logOut={logOut}/>
                <div>
                    <Switch>
                        <Fragment>
                            <Route path="/signIn">
                                <Jumbotron currentUser={currentUser}/>
                                <Layout>
                                    <SignIn setCurrentUser={setCurrentUser}/>
                                </Layout>
                            </Route>
                            <Route path="/signUp">
                                <Jumbotron currentUser={currentUser}/>
                                <Layout>
                                    <SignUp setCurrentUser={setCurrentUser}/>
                                </Layout>
                            </Route>
                            <Route exact path="/">
                                <LandingPage/>
                            </Route>
                        </Fragment>
                    </Switch>
                </div>
            </HashRouter>
            }
            {isConnected &&
            <HashRouter>
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
                                <Redirect to="/userMenu" />
                            </Fragment>
                        </Switch>
                    </div>
                </Layout>
            </HashRouter>
            }
        </React.Fragment>
    );
};

export default withRouter(App);
