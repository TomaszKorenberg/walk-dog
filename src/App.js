import "./components/App.scss";
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header";
import DashboardPage from "./components/pages/DashboardPage";
import WalksPage from "./components/pages/WalksPage";
import Walk from "./components/pages/Walk";
import LoginPage from "./components/pages/LoginPage";
import AdminPage from "./components/pages/AdminPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegisterPage from "./components/pages/RegisterPage";
import Footer from "./components/Footer";
import Article from "./components/pages/Article";
import Api from "./api/api";

const api = new Api();

const App = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        api.user().then(response => setUserData(response));

    }, []);


    const UserContext = React.createContext(userData);


    const isAdmin = false;
    const isLogged = true;


    return (
        <Router>

            <Header/>
            <main>
                <Switch>
                    <UserContext.Provider value={userData}>
                    <Route exact path={"/"}><DashboardPage/></Route>
                    <Route exact path={"/login"}><LoginPage/></Route>
                    <Route exact path={"/register"}><RegisterPage/></Route>
                    <Route exact path={"/profile"}>{isLogged ? <ProfilePage/> : <LoginPage/>}</Route>
                    <Route exact path={"/walks"}>{isLogged ? <WalksPage/> : <LoginPage/>}</Route>
                    <Route exact path={"/walks/:walkId"}>{isLogged ? <Walk/> : <LoginPage/>}</Route>
                    <Route exact path={"/admin"}>{isAdmin ? <AdminPage/> : <LoginPage/>}</Route>
                    <Route exact path={"/blog/:articleId"}><Article/></Route>
                    </UserContext.Provider>
                </Switch>
            </main>
            <Footer/>

        </Router>
    );
};

export default App;
