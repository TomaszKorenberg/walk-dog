import React, {useState} from "react";
import {setToken} from "../../utils/token";
import InfoModal from "../../components/InfoModal/InfoModal";
import Api from "../../api/api";
import styles from "./LoginPage.module.scss";
// import eye from "../../assets/img/eye.svg";

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
            <div  className ={styles.wrap}>                
                    <div className ={styles.flex}>  
                        <div className={styles.lock}></div>                    
                        <p className = {styles.login}>Login</p>  
                    </div>                    
                    <div>
                        <div  className = {styles.flex}>
                            <label htmlFor="email_field">Email address</label>
                            <input
                                type="text"
                                id="email_field"
                                name="email"
                                onChange={onEmailChange}
                                placeholder="mail@gmail.com" required
                            />
                            {isEmailValid ? null : <p style={{color: "red"}}>check your email adress and password</p>}
                        </div>   
                        <div  className = {styles.flex}> 
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                name="password"
                                onChange={onPasswordChange}
                                className = {styles.eye}
                            />
                                {/* <img alt={"eye"}
                                src={eye}
                                className={styles.eye}
                                />     */}
                                {
                                     //fixme: obsługa podglądu wpisanego hasła
                                }
                        </div>   
                        <div className={styles.flex}>
                            <span>Forgot Password ? </span>
                            <button
                                onClick={onSubmit}>
                                Sing in
                            </button>
                        </div>
                        {
                            //fixme: powinien się wyświetlac jak jest bledny login lub hasło a wyswietla sie tylko przy blednym loginie
                           
                        }

                    
                        {registrationState === true ? null : InfoModal("Nie masz konta?",
                            "Zarejestruj się!",
                        "Rejestracja",
                        "./register")}
                    </div>
                    <div className={styles.end}>

                      <p> New to Walk Dog?  <a href="/register">Sing up!</a></p>
                    </div>
                
            </div>
        </>
    )
};


export default LoginPage;
