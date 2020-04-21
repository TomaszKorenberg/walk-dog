import "./App.module.scss";
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import WalksPage from "./pages/WalksPage/WalksPage";
import Walk from "./components/Walk/Walk";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProfilePage from "./pages/ProfilPage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Footer from "./components/Footer/Footer";
import Article from "./components/NewsArticles/Article/Article";
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
