import React from "react";
import "./users.scss";

const RegisterPage = () => (


    <div id={"formDiv"}>
        <h2>SING IN !</h2>

        <form action="">

            email: <input id={"email"} type="email" name="email" placeholder={"email"}/>
            Name: <input type="text" name="Name" placeholder={"Name"}/>
            Surname: <input type="text" name="Surname" placeholder={"Surname"}/>
            password: <input type="password" name={"password"} placeholder={"password"}/>
            confirm password: <input id={"password"} type="password" name={"confirm password"}
                                     placeholder={"confirm password"}/>

            <button>sing in!</button>

        </form>


    </div>


);

export default RegisterPage;
