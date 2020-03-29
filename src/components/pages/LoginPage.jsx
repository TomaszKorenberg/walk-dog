import React, {useState} from "react";
import {getToken, setToken} from "../../utils/token";
import InfoModal from "../alerts/InfoModal";
import Api from "../../api/api";

const api = new Api();


const LoginPage = () => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [registrationState, setRegistrationState] = useState(true);
    const changeRegistrationState = () => {registrationState === true ? setRegistrationState(false): setRegistrationState(true)};


    const onEmailChange = ({target: {value}}) => {
        setEmail(value);
    };

    const onPasswordChange = ({target: {value}}) => {
        setPassword(value);
    };

    const checkEmail = (value) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        return emailRegEx.test(value);
    };

    const onSubmit = () => {
        if (checkEmail(email)) {

            //todo: przenieść to do pliku api.js

            api.loginUser(email, password)
                .then((response) => {
                    if(response.status === 204) {
                        alert("wrong password") }
                    else if (response.status === 207){
                        changeRegistrationState()

                    }
                    else {
                        response.json()
                            .then(({token}) => {
                                setToken(token);
                                window.location.href = "./walks";
                            });
                    }
                });
        }
        else {
            setIsEmailValid(false);
        }
    };

    return (
        <>
            <div>
                <div>Login</div>
                <div>
                    <label htmlFor="email_field">Email address</label>
                    <input
                        type="text"
                        id="email_field"
                        name="email"
                        onChange={onEmailChange}
                    />
                    {isEmailValid ? null : <p style={{color: "red"}}>check your email adress and password</p>}
                    <label htmlFor="password_field">Password</label>
                    <input
                        type="password"
                        id="password_field"
                        name="password"
                        onChange={onPasswordChange}
                    />
                    <button
                        onClick={onSubmit}>
                        Sing in
                    </button>
                    {
                        //fixme: powinien się wyświetlac jak jest bledny login lub hasło a wyswietla sie tylko przy blednym loginie
                    }
                    {registrationState === true ? null : InfoModal("Nie masz konta?",
                        "Zarejestruj się!",
                    "Rejestracja",
                    "./register")}
                </div>
                <div>

                    New to Walk Dog? <a href="/register">Sing up!</a>
                </div>
            </div>
        </>
    )
};


export default LoginPage;
