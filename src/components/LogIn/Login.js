import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-form'>
            <div className="">
                <h2>Log-In</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""
                        placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/registar">Create Account</Link></p>
                <div>-------or--------</div>
                <button className='btn-regular'>Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;