import React, {useState} from "react";
import {getToken, setToken} from "../../utils/token";
import WalksPage from "./WalksPage";
import {Route} from "react-router-dom";

const LoginPage = () => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const onEmailChange = ({target: {value}}) => {
        setEmail(value);
    }

    const onPasswordChange = ({target: {value}}) => {
        setPassword(value);
    }

    const checkEmail = (value) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        return emailRegEx.test(value);
    };

    const onSubmit = () => {
        if (checkEmail(email)) {
            fetch(
                'http://localhost:3001/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Token': getToken()
                    },
                    body: JSON.stringify({email, password})
                }
            ).then((response) => response.json()).then(({ token }) => {
                setToken(token);
                console.log(getToken());
                window.location.href="./walks";
                //todo: zrobic obsluge blednego logowania
            })
        } else {
            setIsEmailValid(false);
        }
    }


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
                    {isEmailValid ? null : <p>dupa</p>}
                    <label htmlFor="password_field">Password</label>
                    <input
                        type="text"
                        id="password_field"
                        name="password"
                        onChange={onPasswordChange}
                    />
                    <button
                        onClick={onSubmit}>
                        Sing in
                    </button>
                </div>
                <div>
                    New to Walk Dog? <a href="/register">Sing up!</a>
                </div>
            </div>
        </>
    )
};


export default LoginPage;
