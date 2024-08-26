import React from 'react';
import './Header.css';
import logo from '../../../assests/pharmacy_logo2.jpg';
import { FaShoppingCart ,FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import React from 'react';
// import './Header.css'; // Ensure you have this file for CSS
// import logo from '../../../assets/pharmacy_logo2.jpg'; // Adjust the path as needed
// import { FaShoppingCart } from 'react-icons/fa';
const SearchIcon=styled(FaSearch)`
    position: absolute;
    top:13px;
    left:5px;
    color: grey;
`;
const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white ps-5 pe-4 pt-0 pb-0">
              
                    {/* Brand Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Pharmacy Logo" className="logo" />
                    </a>

                    {/* Toggler Button for Mobile */}
                    <button
                        className="navbar-toggler ms-auto me-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon "></span>
                       
                    </button>
                    <div className="cart-icon d-lg-none d-inline-block" >
                                <FaShoppingCart size={24} style={{color:'var(--blue)'}}/>
                            </div>
                    {/* Navigation and Search */}
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" to="/baby-mother-care">Baby & Mother Care</Link>
                              
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Nutritions & Supplements">Nutritions & Supplements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Medicine">Medicine</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#OTC And Health Need">OTC And Health Need</a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="search-bar position-relative">
                                <input type="text" placeholder="Search..." className="search-input ps-4 border-3 border-light" />
                            <SearchIcon />
                           
                            </div>
                            <div className="cart-icon d-lg-block d-none">
                                <FaShoppingCart size={24} style={{color:'var(--blue)'}}/>
                            </div>
                        </div>
                    </div>
                 
            </nav>
        </header>
    );
}

export default Header;






































