import React from 'react'
import { Link,useLocation,useHistory } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import './login.css';

const Login = () => {
    const {user, signInUseingGoogle} = useAuth();
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/shop'

    const handleGoogleLogIn =  () => {
        signInUseingGoogle()
        .then(result => {
            history.push(redirect_url)
        })
    }
    return (
        <div className="login-form">
            
            <div>
            <h2>Login</h2>
                <form className="mx-auto"> 
                    <input type="email" placeholder="Enter your Email" />
                    <br /><br />
                    <input type="password" placeholder="Enter your password" />
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>New To Ema-jon ? <Link to="/register"> Please Create Your Own Account.</Link></p>
                <div>---------------------------0---------------------------------------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    )
}

export default Login
