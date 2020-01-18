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

function App(props) {

    const[result,setResult] = useState({});
    const [currentUser, setCurrentUser] = useState(
        {
            id: 4,
            username: 'someone',
            password: '1234',
            email: 'gmail.con',
            credits: 2,
            area: 'Tel-Aviv North',
        }
    );
    const isConnected = !!currentUser.id;


    const updateResult = (result) => {
        setResult(result);
        return;
    };
    console.log("isConnected ", isConnected)
    console.log("currentUser",currentUser)
    console.log("resultsss",result);
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Fragment>
                        <NavigationBar user={null}/>
                        <Jumbotron user={currentUser}/>
                        <div>
                            <Route exact path="/">
                                <LandingPage/>
                            </Route>
                            <Route path="/sign-in">
                                {/*<Jumbotron user={currentUser}/>*/}
                                <Layout>
                                    <SignIn setCurrentUser={setCurrentUser}/>
                                </Layout>
                            </Route>
                            <Route path="/signUp">
                                <Layout>
                                    <SignUp/>
                                </Layout>
                            </Route>
                            <Route path="/upload">
                                <div>
                                    <div className="App">
                                        <div className="Card">
                                            <Upload currentUser={currentUser} history={props.history} />
                                        </div>
                                    </div>
                                </div>
                            </Route>
                            <Route path="/userMenu"><UserMenu/></Route>
                            <Route path="/insert-receipt">
                                <InsertReceipt currentUser={currentUser} withPrice={true}/>
                            </Route>
                            <Route path="/create-shopping-cart">
                                <CreateShoppingCart updateResult={updateResult}currentUser={currentUser}/>
                            </Route>
                            <Route path="/cartResult"> <CartResult Result={result}/></Route>
                        </div>
                    </Fragment>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default withRouter(App);
