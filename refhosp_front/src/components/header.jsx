import  { useState } from 'react';
import logoWhite from '../assets/img/whiteLogo.png';
import { FaBars } from 'react-icons/fa';
// import LoginModal from '../modals/login';
import { Link } from 'react-router-dom';
function Header()
{
    const [ann, setAnn] = useState(true);
    function handleAnn()
    {
        setAnn(!ann);
        console.log(ann);
    }
    return (
        <>
            <header>
                <div className="top-nav-wrapper">
                    <div className={`${ann ? 'top' : 'top d-none'} `} id="top"  >
                        <div className="cont">
                            <div className="title">
                                <h3>Announcements</h3>
                                <div id="slider">
                                    <figure>
                                        <p>Welcome to Sheik Hassen Yabare Comprehensive Specialized Hospital Official Website</p>
                                        <p>Welcome to Sheik Hassen Yabare Comprehensive Specialized Hospital Official Website</p>
                                        <p>Welcome to Sheik Hassen Yabare Comprehensive Specialized Hospital Official Website</p>
                                    </figure>
                                </div>
                            </div>
                            <div className="close_x">
                                <p id="closebtn" onClick={handleAnn} >X</p>
                            </div>
                        </div>
                    </div>

                </div>
                <nav className="navbar navbar-expand-lg" id="navbar">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={logoWhite} alt="logo" width="150" height="40"
                                className="d-inline-block align-text-top" />
                        </Link>

                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon">
                                <FaBars style={{ color: '#fff', fontSize: '28px' }} />
                                {/* <i className="fas fa-bars" style="color:#fff; font-size:28px;"></i> */}
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto"></div>
                            <div className="navbar-nav">
                                <ul className="navbar-nav d-flex align-items-center justify-content-center">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-item  nav-link">HOME</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            WHO WE ARE
                                        </a>
                                        <ul className="dropdown-menu bg-custom">
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="whoweare.html">About Us</a> */}
                                                <Link className="dropdown-item text-light" to='/about'> About Us </Link>
                                            </li>
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="ward.html">Ward</a> */}
                                                <Link className="dropdown-item text-light" to='/ward'> Ward </Link>
                                            </li>
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="portfolio.html">Portfolio</a> */}
                                                <Link className="dropdown-item text-light" to='/portfolio'> Portfolio </Link>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            WHAT WE DO
                                        </a>
                                        <ul className="dropdown-menu bg-custom">
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="research.html">Research</a> */}
                                                <Link className="dropdown-item text-light" to='/research'> Research </Link>
                                            </li>
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="academic.html">Academic</a> */}
                                                {/* <Link className="dropdown-item text-light" to='/academic'> Academic </Link> */}
                                            </li>
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="services.html">Services</a> */}
                                                <Link className="dropdown-item text-light" to='/services'> Services </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            WORK WITH US
                                        </a>
                                        <ul className="dropdown-menu bg-custom">
                                            {/* <li className="py-1">
                                                <a className="dropdown-item text-light" href="career.html">Career</a>
                                            </li> */}
                                            <li className="py-1">
                                                <Link className="dropdown-item text-light" to="/bids">Bids</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            RESOURCE
                                        </a>
                                        <ul className="dropdown-menu bg-custom">
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="blog.html">Blog</a> */}
                                                <Link className="dropdown-item text-light" to="/blog">Blog</Link>
                                            </li>
                                            <li className="py-1">
                                                {/* <a className="dropdown-item text-light" href="tips.html">Tips</a> */}
                                                <Link className="dropdown-item text-light" to="/tips">Tips</Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        {/* <a href="donate.html" className="nav-item nav-link">DONATE</a> */}
                                        <Link to="/donate" className="nav-item nav-link">DONATE</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button type="button" className="nav-item nav-link donate" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Login
                        </button>
                    </div>
                </nav>
            </header>
          
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login Page</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control mt-1" id="exampleInputEmail"
                                        aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control mt-1" id="exampleInputPassword"
                                         />
                                </div>
                                <button type="submit" className="mt-2 btn btn-primary btn-login">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;