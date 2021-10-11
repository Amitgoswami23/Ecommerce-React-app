import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register Page</h2>
                <form>
                    <input type="email" id="email" placeholder="Enter your Email" />
                    <br/><br/>
                    <input type="password" id="password" placeholder="Enter your Password" />
                    <br/><br/>
                    <input type="password" id="password" placeholder="Re-Enter your Password" />
                    <br/><br/>
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an Account ? <Link to="/login"> Please Sign In.</Link></p>
            </div>
        </div>
    )
}

export default Register
