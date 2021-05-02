import React, { useContext, useState } from 'react'
import {IradioContext} from '../contexts/IradioContext';

const Login = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const { loginFunc } = useContext(IradioContext);

    const updateUserEmail = (e) => setUserEmail(e.target.value);
    const updateUserpassword = (e) => setUserPassword(e.target.value);

    const handleUserLogin = (e) => {
        e.preventDefault();

        const user = {
            userEmail,
            userPassword
        }

        loginFunc(user);
    }

    return ( 
        <div className="loginWrapper">
            <h1>Login component</h1>
            <form onSubmit={handleUserLogin}>
                <label>Enter your email:</label>
                <input 
                onChange={updateUserEmail} 
                type="text" 
                placeholder="Email..." 
                required
                />
                <label>Enter your password</label>
                <input 
                onChange= {updateUserpassword} 
                type="text" 
                placeholder="Password" 
                required
                />
                <button>Login</button>
            </form>
        </div>
     );
}

export default Login;