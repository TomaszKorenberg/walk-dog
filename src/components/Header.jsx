import "./Header.scss";
import React from "react";
import { Link} from "react-router-dom";


const Header = () => (
    <header>
        <nav>
            <li>
                <Link to={"/"}>Logo</Link>
            </li>
            <div className={"menu-right"}>
                <li className={"menu-right-li"}>
                    <Link to={"/walks"}>Spacery</Link>
                </li>
                <li className={"menu-right-li"}>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li className={"menu-right-li"}>
                    <Link to={"/register"}>Zarejestruj</Link>
                </li>
            </div>
        </nav>
    </header>
);

export default Header;