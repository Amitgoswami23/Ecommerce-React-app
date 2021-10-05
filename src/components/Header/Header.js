import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            {/* navbar code start here */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">EMA-Shop</NavLink> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto  mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/order">Order Review</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/inventrory" className="nav-link">Manage Inventory</NavLink>
                        </li>
                    </ul>
                   
                    </div>
                </div>
            </nav>
            {/* navbar code end here */}
        </div>
    )
}

export default Header
