import React, { useState } from "react";

const LoginPage = () => (

    
    
    <div>
        <div>Login</div>
        <div>
            <label htmlFor="login_field">Email address</label>
            <input type="text" id="login_field" name="login"/>
            <label htmlFor="password_field">Password</label>
            <input type="text" id="password_field" name="password"/>
            <input type="submit"/>
        </div>
        <div>
            New to Walk Dog? <a href="/register">Sing up!</a>
        </div>
    </div>

);

export default LoginPage;