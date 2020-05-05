import React, {useState} from "react";
import {setToken} from "../../utils/token";
import InfoModal from "../../components/InfoModal/InfoModal";
import Api from "../../api/api";
import styles from "./LoginPage.module.scss";
import eye from "../../assets/img/eye.svg";

const api = new Api();


const LoginPage = () => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(true);


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

    const showPassword = () => {
        let password = document.getElementById("password_field");       
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
      };

    const onSubmit = () => {    
        if (checkEmail(email)) {

            //todo: przenieść to do pliku api.js

            api.loginUser(email, password)
                .then((response) => {
                    if(response.status === 204) {
                        alert("wrong password") }

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
                            <label htmlFor="email_field">email</label>
                            <input
                                type="text"
                                id="email_field"
                                name="email"
                                onChange={onEmailChange}
                                placeholder="email" required
                                className = {styles.input}
                            />
                            {isEmailValid ? null : <p style={{color: "red"}}>Niepoprawny email lub hasło</p>}
                        </div>   
                        <div  className = {styles.flex}> 
                            <label htmlFor="password_field">Hasło</label>
                            <input
                                type="password"
                                id="password_field"
                                name="Hasło"
                                onChange={onPasswordChange}
                                className = {styles.input}
                            />
                                <img alt={"eye"}
                                src={eye}
                                className={styles.eye}
                                onClick={showPassword}
                                />                                 
                        </div>   
                        <div className={styles.flex, styles.buttonWrap}>
                            <span className = {styles.span}>Przypomneć hasło ? </span>
                            <button
                                onClick={onSubmit}
                                className={styles.button}
                                >
                                Zaloguj
                            </button>
                        </div>
                        {
                            //fixme: powinien się wyświetlac jak jest bledny login lub hasło a wyswietla sie tylko przy blednym loginie
                           // fixme: obsługa przypomnienia hasła
                        }


                    </div>
                    <div className={(styles.button, styles.end)}>

                      <p> Jesteś gotowy na Walk Dog?   <a href="/register">  Zarejestruj się !</a></p>
                    </div>
                
            </div>
        </>
    )
};


export default LoginPage;
