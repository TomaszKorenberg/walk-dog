import React, {useState} from "react";
import "./RegisterPage.scss";

const RegisterPage = () => {

        const [email, setEmail] = useState(null);
        const [password, setPassword] = useState(null);
        const [matchPassword, setMatchPassword ] = useState(null)
        const [isEmailValid, setIsEmailValid] = useState(true);
        const [isPasswordValid, setIsPasswordValid] = useState(true)

        const onEmailChange = ({target: {value}}) => {
            setEmail(value);
        }

        const onPasswordChange = ({target: {value}}) => {
            setPassword(value);
        }
    const onSecondPasswordChange = ({target: {value}}) => {
        setMatchPassword(value);
    }

        const checkEmail = (value) => {
            const emailRegEx = /\S+@\S+\.\S+/;
            return emailRegEx.test(value);
        };

        const checkPassword = (value) => {
            const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            return passwordRegEx.test(value);
        }
        const checkBothPasswords = () => {
            return password == matchPassword

        }
    const onSubmit = () => {
        if(checkEmail(email) && checkPassword(password) && checkBothPasswords()){
            fetch('http://localhost:3001/user/login', {method:'POST',headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },body:JSON.stringify({email, password})})
                .then((response)=> response.json()).then((user)=> {
                console.log(user);
            })
        } else {
            setIsEmailValid(false);
        }
    }

        return (
            <div id={"formDiv"}>
                <h2> JOIN US !</h2>

                <form action="" >

                    email: <input id={"email"} type="email" name="email" placeholder={"email"} onChange={onEmailChange}/>
                    {isEmailValid ? null : <p> wrong e-mail </p>}
                    Name: <input type="text" name="Name" placeholder={"Name"}/>
                    Surname: <input type="text" name="Surname" placeholder={"Surname"}/>
                    password: <input type="password" name={"password"} placeholder={"password"} onChange={onPasswordChange}/>
                    {isPasswordValid ? null : <p>Your password is not strong enough</p>}
                    confirm password: <input id={"password"} type="password" name={"confirm password"} placeholder={"confirm password"} onChange={onSecondPasswordChange}/>

                    <button onClick={onSubmit}> JOIN</button>

                </form>


            </div>


        )
    }
;


export default RegisterPage;
