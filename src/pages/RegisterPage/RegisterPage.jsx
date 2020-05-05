import React, {useState} from "react";
import InfoModal from "../../components/InfoModal/InfoModal";
import Api from "../../api/api";
import styles from "./RegisterPage.module.scss";
import eye from "../../assets/img/eye.svg";

const api = new Api();


const RegisterPage = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [matchPassword, setMatchPassword] = useState(null);
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [nickname, setNickname] = useState(null);


    const onEmailChange = ({target: {value}}) => setEmail(value);
    const onPasswordChange = ({target: {value}}) => setPassword(value);
    const onSecondPasswordChange = ({target: {value}}) => setMatchPassword(value);
    const onNameChange = ({target: {value}}) => setName(value);
    const onSurnameChange = ({target: {value}}) => setSurname(value);
    const onNicknameChange = ({target: {value}}) => setNickname(value);



    const [registrationState, setRegistrationState] = useState(true)
    const changeRegistrationState = () => {registrationState === true ? setRegistrationState(false): setRegistrationState(true);}


    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const isEmailFormatCorrect = (value) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        return emailRegEx.test(value);
    };
    const isPasswordFormatCorrect = (value) => {
        const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return passwordRegEx.test(value);
    };
    const arePasswordsEqual = () => password === matchPassword;

    const showPassword = () => {
        let password = document.getElementById("password_field");       
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
      };

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            !isEmailFormatCorrect(email)
         //   || !isPasswordFormatCorrect(password)
            || !arePasswordsEqual()
        ) {
            return setIsEmailValid(false);
        }

        api.registerUser(email, password, name, surname, nickname)
            .then((response) => {
                if (response.status === 207) {
                    changeRegistrationState()
                 }
                else {
                    response.json()
                 //    .then((user) => {
                 //        window.location.href = "/login";
                 //    });
                 };
            });
    };
    return (
        <div className={styles.wrap}>
        <div id={"formDiv"}>
            <h2> DOŁĄCZ DO NAS !</h2>

            <form action="">

               <span> email:</span>
                <input id={"email"}
                       type="email"
                       name="email"
                       placeholder={"email"}
                       onChange={onEmailChange}
                       className={styles.input}/>
                {isEmailValid ? null : <p> wrong e-mail </p>}

                <span> Imię:</span>
                <input type="text"
                       name="name"
                       placeholder={"Imę"}
                       onChange={onNameChange}
                       className={styles.input}/>

                <span> Nazwisko:</span>
                <input type="text"
                       name="surname"
                       placeholder={"Nazwisko"}
                       onChange={onSurnameChange}
                       className={styles.input}/>

                <span> Nazwa użytkownika:</span>
                <input type="text"
                       name="nickname"
                       placeholder={"Nazwa użytkownika"}
                       onChange={onNicknameChange}
                       className={styles.input}/>

                <span> Hasło: </span>
                <input type="password"
                              name={"password"}
                              placeholder={"hasło"}
                              id="password_field"
                              onChange={onPasswordChange}
                              className={styles.input}/>
                {isPasswordValid ? null : <p>Twoje hasło jest zbyt słabe</p>}

                <img alt={"eye"}
                      src={eye}
                      className={styles.eye}
                      onClick={showPassword}
                />  

                <span className={styles.span}> Powtórz Hasło:</span>
                <input id={"password"}
                       type="password"
                       name={"confirm password"}
                       placeholder={"powtórz hasło"}
                       onChange={onSecondPasswordChange}
                       className={styles.input}/>

                <button 
                    onClick={onSubmit}
                    className={styles.button}> JOIN</button>


            </form>

            {registrationState === true ? null : InfoModal("Kurczaczki",
                "wygląda na to, że taki użytkownik już jest w bazie, jeśi nie pamiętasz hasła możesz je odzyskać",
                "resetuj hasło",
                "./register")}
        </div>
        </div>


    )
};


export default RegisterPage;
