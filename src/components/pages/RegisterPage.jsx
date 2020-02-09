import React from "react";
import "./users.scss";
const RegisterPage = () => (
<div id={"formDiv"}>
    <h2>SING IN !</h2>
            <form action="" >
                   email:  <input type="email" name="email" placeholder={"email"}/>
                   Name: <input type="text" name="Name" placeholder={"Name"}/>
                   Surname: <input type="text" name="Surname" placeholder={"Surname"}/>
                   Country: <input type="text" name="Country" placeholder={"Country"}/>
                   City: <input type="text" name={"city"} placeholder={"City"}/>
                   password: <input type="password" name={"password"} placeholder={"password"}/>
                   confirm password: <input type="password"name={"confirm password"} placeholder={"confirm password"}/>
                   postal code: <input type="text" name={"postal code"} placeholder={"postal code"}/>
                   region: <input type="text" placeholder={"region"}/>
                   street name: <input type="text" />
                   street number <input type="number"/>
                   local number <input type="number"/>
                        <div> gender: Male <input type="radio" name="gender" value="male"/> Female
                            <input type="radio" name="gender" value="female"/> other
                            <input type="radio" name="gender" value="other"/></div>

                <button>sing in!</button>
            </form>

</div>


);

export default RegisterPage;
