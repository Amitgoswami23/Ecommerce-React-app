import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            {/* navbar code start here */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">EMA-Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto  mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/order">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a href="/inventrory" className="nav-link">Manage Inventory</a>
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
