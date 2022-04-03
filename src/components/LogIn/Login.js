import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_usrl = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_usrl);
            })
    }
    return (
        <div className='login-form'>
            <div className="">
                <h2>Log-In</h2>
                <form >
                    <input type="email" name="" id=""
                        placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/registar">Create Account</Link></p>
                <div>-------or--------</div>
                <button
                    className='btn-regular'
                    onClick={handleGoogleLogin}
                >Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;