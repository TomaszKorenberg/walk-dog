import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <header>
            <Link to={"/"}>Do niczego</Link>
            <Link to={"/test"}>Do testu</Link>
        </header>
        <main>
            <Switch>
                <Route exact path={"/"}>
                    <h1>Do niczego</h1>
                </Route>
                <Route exact path={"/test"}>
                    <h1>Teeeeest</h1>
                </Route>
            </Switch>
        </main>
    </Router>
  );
}

export default App;
