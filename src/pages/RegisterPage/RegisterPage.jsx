import React, {useState} from "react";
import InfoModal from "../../components/InfoModal/InfoModal";
import Api from "../../api/api";

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
        <div id={"formDiv"}>
            <h2> JOIN US !</h2>

            <form action="">

                email:
                <input id={"email"}
                       type="email"
                       name="email"
                       placeholder={"email"}
                       onChange={onEmailChange}/>
                {isEmailValid ? null : <p> wrong e-mail </p>}

                Imię:
                <input type="text"
                       name="name"
                       placeholder={"Name"}
                       onChange={onNameChange}/>

                Nazwisko:
                <input type="text"
                       name="surname"
                       placeholder={"Surname"}
                       onChange={onSurnameChange}/>

                Nazwa użytkownika:
                <input type="text"
                       name="nickname"
                       placeholder={"Nazwa użytkownika"}
                       onChange={onNicknameChange}/>

                Hasło: <input type="password"
                              name={"password"}
                              placeholder={"password"}
                              onChange={onPasswordChange}/>
                {isPasswordValid ? null : <p>Your password is not strong enough</p>}

                Powtórz Hasło:
                <input id={"password"}
                       type="password"
                       name={"confirm password"}
                       placeholder={"confirm password"}
                       onChange={onSecondPasswordChange}/>

                <button onClick={onSubmit}> JOIN</button>


            </form>

            {registrationState === true ? null : InfoModal("Damn",
                "it looks like you already exist in our base if you forgot your password try to restore it",
                "restore password",
                "./register")}
        </div>


    )
};


export default RegisterPage;
