import React, { useState } from 'react';
import "../SignIn/SignIn.css";
import "./SignUp.css";

import { NavLink } from "react-router-dom";
import { useAuth } from '../../Contexts/AuthProvider';

const SignUp = ({ signOutHandler, signInHandler }) => {
    const tempUser = {
        name: "",
        email: "",
        password: "",
        rpass: ""
    };

    const { signUpUsingEmail } = useAuth();

    const [showing, setShowing] = useState(false);
    const isShow = () => {
        setShowing(!showing);
    }
    const signUpHandler = e => {
        const formElement = e.target.parentElement.parentElement;
        e.preventDefault();

        signUpUsingEmail(tempUser?.name, tempUser?.email, tempUser?.password, formElement);
        // sending formElement for resetting if the signUp was successFull
    }

    return (
        <div className="form-container">
            <div className="sign-in-header">SignUp Form</div>
            <form>
                <div className="input-field">
                    <input
                        onBlur={(e) => {
                            tempUser.name = e.target.value;
                        }}
                        type="text" required />
                    <label>Full Name</label>
                </div>
                <div className="input-field">
                    <input
                        onBlur={(e) => {
                            tempUser.email = e.target.value;
                        }}
                        type="text" required />
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input
                        onBlur={(e) => {
                            tempUser.password = e.target.value;
                        }}
                        className="password" type={showing ? "text" : "password"} required />
                    <span className="show">
                        <button onClick={isShow}>SHOW</button>
                    </span>
                    <label>Password</label>
                </div>
                <div className="input-field">
                    <input
                        onBlur={(e) => {
                            tempUser.rpass = e.target.value;
                        }}
                        className="password" type={showing ? "text" : "password"} required />
                    <span className="show">
                        <button onClick={isShow}>SHOW</button>
                    </span>
                    <label>Repeat Password</label>
                </div>
                <div className="sign-in-button">
                    <button onClick={signUpHandler} >Sign Up</button>
                    <div className="inner"></div>
                </div>
            </form>


            <div className="signin">
                Already Signed up ? <NavLink to="/"> SignIn now</NavLink>
            </div>
        </div>

    );
};

export default SignUp;