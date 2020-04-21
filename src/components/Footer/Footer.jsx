import "./Footer.module.scss";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => (
    <footer>
        <div>
            <nav>
                <li>
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
        </div>
        ©2020
    </footer>
);

export default Footer;