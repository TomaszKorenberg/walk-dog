import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header";
import DashboardPage from "./components/pages/DashboardPage";
import WalksPage from "./components/pages/WalksPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegisterPage from "./components/pages/RegisterPage";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
        <Header/>
        <main style={{marginTop:80, minHeight:200}}>
            <Switch>
                <Route exact path={"/"}><DashboardPage/></Route>
                <Route exact path={"/login"}><LoginPage/></Route>
                <Route exact path={"/register"}><RegisterPage/></Route>
                <Route exact path={"/profile"}><ProfilePage/></Route>
                <Route exact path={"/walks"}><WalksPage/></Route>
            </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
