import React from 'react';
import { Link } from 'react-router-dom';

const Registar = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter password' />
                    <br />
                    <input type="submit" value="Submit" />

                </form>

                <p>Already Have an account? <Link to="/login">Log-In</Link></p>
                <div>----or----</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Registar;