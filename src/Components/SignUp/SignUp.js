import React, { useState } from 'react';
import "../SignIn/SignIn.css";
import "./SignUp.css";

import { NavLink } from "react-router-dom";

const SignUp = ({ user, signOutHandler, signInHandler }) => {
    const [showing, setShowing] = useState(false);
    const isShow = () => {
        setShowing(!showing);
    }

    return (
        <div className="form-container">
            <div className="sign-in-header">SignUp Form</div>
            <form>
                <div className="input-field">
                    <input type="text" required />
                    <label>Full Name</label>
                </div>
                <div className="input-field">
                    <input type="text" required />
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input className="password" type={showing ? "text" : "password"} required />
                    <span className="show">
                        <button onClick={isShow}>SHOW</button>
                    </span>
                    <label>Password</label>
                </div>
                <div className="input-field">
                    <input className="password" type={showing ? "text" : "password"} required />
                    <span className="show">
                        <button onClick={isShow}>SHOW</button>
                    </span>
                    <label>Repeat Password</label>
                </div>
                <div className="sign-in-button">
                    <button >Sign Up</button>
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