import React, { useEffect } from 'react';
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from '../../Contexts/AuthProvider';

const SignIn = () => {

    const { user, signInUsingEmail, signInUsingGoogle, signedIn, setSignedIn } = useAuth();
    const tempUser = {
        name: "",
        email: "",
        password: "",
        rpass: ""
    };
    const history = useHistory();
    useEffect(() => {
        setSignedIn(signedIn + 1);
        console.log("user.email => ", user.email);
        console.log("sign =>>> ", signedIn);

        if (user.email) {
            history.push("/dashboard");
        }
        else {
            history.push("/");
        }
    }, [user]);

    const signInHandler = (e) => {
        e.preventDefault();
        signInUsingEmail(tempUser.email, tempUser.password);
    }


    return (
        <div className="form-container">
            <div className="sign-in-header">SignIn Form</div>
            <form>
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
                        className="password" type="password" required />
                    <span className="show">SHOW</span>
                    <label>Password</label>
                </div>
                <div className="sign-in-button">
                    <button onClick={signInHandler}>Sign In</button>
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
                <button onClick={signInUsingGoogle} className="google">
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