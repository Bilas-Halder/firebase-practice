import React from 'react';
import "./SignIn.css";
import { NavLink } from "react-router-dom";

const SignIn = ({ user, signOutHandler, signInHandler }) => {
    return (
        <div className="form-container">
            <div className="sign-in-header">SignIn Form</div>
            <form>
                <div className="input-field">
                    <input type="text" required />
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input className="password" type="password" required />
                    <span className="show">SHOW</span>
                    <label>Password</label>
                </div>
                <div className="sign-in-button">
                    <button >Sign In</button>
                    <div className="inner"></div>
                </div>
            </form>
            <div className="auth">
                Or sign in with
            </div>
            <div className="links">
                <div className="facebook">
                    <i className="fab fa-facebook-square"><span>Facebook</span></i>
                </div>
                <button onClick={signInHandler} className="google">
                    <i className="fab fa-google-plus-square"><span>Google</span></i>
                </button>
            </div>
            <div className="signup">
                Not a member? <NavLink to="/signup"> Signup now</NavLink>
            </div>
        </div>

    );
};

export default SignIn;