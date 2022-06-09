import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" >Logo</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link active" aria-current="page" >Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    return (
        <header>{showNavigation()}</header>
    );
};

export default Header;