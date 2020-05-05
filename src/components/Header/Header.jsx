import styles from "./Header.module.scss";
import React from "react";
import AppContext from "../../components/ContextApp/ContextApp";
import { NavLink, Redirect} from "react-router-dom";
import logo from "../../assets/img/logo.svg"



const logout = () => {
    localStorage.removeItem("token")


};


const Header = () => (
    <header>

        <nav>
            <AppContext.Consumer>
                {context => (<>

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
                {!context.loggedUser
                    ?(
                <li className={styles.menuLi}>
                    <NavLink activeClassName={styles.menuLiActive}
                             className={styles.menuLi}
                             to={"/login"}>Login</NavLink>
                </li>
                    ):(
                        <li className={styles.menuLi}
                                     onClick={logout}>
                            <a className={styles.menuLi} href={"/"}>Wyloguj</a>
                        </li>
                    )}
                {!context.loggedUser
                    ?(
                        <li className={styles.menuLi}>
                        <NavLink activeClassName={styles.menuLiActive}
                                 className={styles.menuLi}
                                 to={"/register"}>Zarejestruj</NavLink>
                    </li>
                    ):(
                        null
                    )}

            </div>
                    </>)}
            </AppContext.Consumer>
        </nav>
    </header>
);

export default Header;