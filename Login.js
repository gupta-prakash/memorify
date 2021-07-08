import React, { useState } from 'react'
import "../App.css"

const Login = props => {
    const [login, setLogin] = useState(true);
    const toggleLogin = () => setLogin(!login);
    return (
        <div id="login-box">
            <div id="login-side-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVmFY6GXbjlcaGTvHmXa9EdywHUeMCIajKXPRNusX4qZ8b6VYak0Cmn6JB9F1-fsnomt9syqDWbA&usqp=CAU" alt="logo" className="logo"></img>
                <h2>Memorify</h2>
                <p>Hello! Anonymous.</p>
            </div>

            <div id="login-card">
                <h2>{login ? "Log In" : "Register"}</h2>
                <p id="loginInfo" >{props.loginInfo}</p>
                <div>
                    <input id="username" className="login-input" type="text" placeholder="Enter Username"></input>
                </div>
                <div>
                    <input id="password" className="login-input" type="text" placeholder="Enter Password"></input>
                </div>

                {login ?
                    <button className="login-register_btn" onClick={props.onLogin}>Log In</button>
                    : <div>
                        <div>
                            <input id="email" className="login-input" type="email" placeholder="Enter Email"></input>
                        </div>
                        <button onClick={props.onRegister} className="login-register_btn">Register</button>
                    </div>}

                <p id="register-login" >{login ? "Don't have an account?" : "Already have an account?"}<span onClick={toggleLogin} >{login ? "Register" : "Log In"}</span></p>
            </div>
        </div>
    )
}

export default Login
