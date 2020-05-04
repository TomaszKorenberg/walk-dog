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
import Article from "./components/ViewNews/Article/Article";
import AppContext from "./components/ContextApp/ContextApp";
import Api from "./api/api";

const api = new Api();


const App = () => {

    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        api.user().then(response => setUserRole(response.role));

    }, []);

    const context = {
        loggedUser: userRole
    }

    return (
        <Router>
            <AppContext.Provider value={context}>
                <Header/>
                <main>
                    <Switch>

                        <Route exact path={"/"}><DashboardPage/></Route>
                        <Route exact path={"/login"}><LoginPage/></Route>
                        <Route exact path={"/register"}><RegisterPage/></Route>
                        <Route exact path={"/profile"}>{userRole ? <ProfilePage/> : <LoginPage/>}</Route>
                        <Route exact path={"/walks"}>{userRole ? <WalksPage/> : <LoginPage/>}</Route>
                        <Route exact path={"/walks/:walkId"}>{userRole ? <Walk/> : <LoginPage/>}</Route>
                        <Route exact path={"/admin"}>{userRole === "admin" ? <AdminPage/> : <LoginPage/>}</Route>
                        <Route exact path={"/blog/:articleId"}><Article/></Route>
                        <Route exact path={"/logout"}>{"LOGOUT"}</Route>

                    </Switch>
                </main>
                <Footer/>
            </AppContext.Provider>
        </Router>
    );
};

export default App;
