import styles from "./Header.module.scss";
import React from "react";
import { NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.svg"


const Header = () => (
    <header>
        <nav>

                <NavLink exact
                         activeClassName={styles.menuLiActive}
                         className={styles.menuLi}
                         to={"/"}>
                    <img alt={"logo"}
                         src={logo}
                         className={styles.logo}
                    />
                    Strona Główna
                </NavLink>

            <div className={styles.menu}>
                <li className={styles.menuLi}>
                    <NavLink activeClassName={styles.menuLiActive}
                             className={styles.menuLi}
                             to={"/profile"}>Profil</NavLink>
                </li>
                <li className={styles.menuLi}>
                    <NavLink activeClassName={styles.menuLiActive}
                             className={styles.menuLi}
                             to={"/walks"}>Spacery</NavLink>
                </li>
                <li className={styles.menuLi}>
                    <NavLink activeClassName={styles.menuLiActive}
                             className={styles.menuLi}
                             to={"/login"}>Login</NavLink>
                </li>
                <li className={styles.menuLi}>
                    <NavLink activeClassName={styles.menuLiActive}
                             className={styles.menuLi}
                             to={"/register"}>Zarejestruj</NavLink>
                </li>
            </div>
        </nav>
    </header>
);

export default Header;