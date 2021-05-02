import {useContext, useState} from 'react';
import {IradioContext} from '../contexts/IradioContext';

const Register = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {userLoggedIn, handleUserData } = useContext(IradioContext);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    

    const handleCreateAccount = (e) => {
        e.preventDefault();

        const newUser = {
            email,
            password
        }

        handleUserData(newUser);
    }


    return ( 

        
        <div className="registerWrapper">
            <div>
                {!userLoggedIn ? 
                    <form onSubmit={handleCreateAccount}>
                    <label>Email</label>
                    <input 
                        onChange={handleEmailChange} 
                        type="text" 
                        placeholder="Please enter email..."
                        required
                    />
                    <label>Password</label>
                    <input 
                        onChange={handlePasswordChange}
                        type="text"  
                        placeholder="Please enter password..."
                        required
                    />
                    <button>Create Account!</button>
                </form>
                :
                <div>user is logged in</div>
                }
                </div>

        </div>
    );
}

export default Register;