import React, {useState} from "react";
import "./RegisterPage.scss";
import InfoModal from "../alerts/InfoModal";


const RegisterPage = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [matchPassword, setMatchPassword] = useState(null);
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);

    const onEmailChange = ({target: {value}}) => setEmail(value);
    const onPasswordChange = ({target: {value}}) => setPassword(value);
    const onSecondPasswordChange = ({target: {value}}) => setMatchPassword(value);
    const onNameChange = ({target: {value}}) => setName(value);
    const onSurnameChange = ({target: {value}}) => setSurname(value);


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

        fetch(
            'http://localhost:3001/user/register',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password, name, surname})
            }
        )
            .then((response) => {
                if (response.status === 207) {
                    changeRegistrationState()
                 }
                else {
                    response.json()
                    .then((user) => {
                        window.location.href = "/login";
                    });
                 };
            });
    };
    return (
        <div id={"formDiv"}>
            <h2> JOIN US !</h2>

            <form action="">

                email: <input id={"email"} type="email" name="email" placeholder={"email"} onChange={onEmailChange}/>
                {isEmailValid ? null : <p> wrong e-mail </p>}
                Name: <input type="text" name="Name" placeholder={"Name"} onChange={onNameChange}/>
                Surname: <input type="text" name="Surname" placeholder={"Surname"} onChange={onSurnameChange}/>
                password: <input type="password" name={"password"} placeholder={"password"}
                                 onChange={onPasswordChange}/>
                {isPasswordValid ? null : <p>Your password is not strong enough</p>}
                confirm password: <input id={"password"} type="password" name={"confirm password"}
                                         placeholder={"confirm password"} onChange={onSecondPasswordChange}/>

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
