import "./Header.scss";
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";


const Header = () => (
    <header>

        <Link to={"/"}>Logo</Link>
        <div>
            <Link to={"/walks"}>Spacery</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Zarejestruj</Link>
        </div>
    </header>
);

export default Header;