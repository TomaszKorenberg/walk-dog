import "./LoginPage.scss";
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";


const LoginPage = () => (     
 
    <fieldset>
    <legend>Zaloguj się</legend>
        <form action="">
            <input type="text" name="email"/>
            
            <input type="text" name="password"/>
            
            <button>Zaloguj</button>


        </form>
        </fieldset>
   
);

export default LoginPage;