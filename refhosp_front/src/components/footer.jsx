import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import { FaFacebookF, FaTwitter, FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
function Footer()
{
    return (
        <footer className="bg-light py-5">
            <div className="container-sm">
                <div className="top-footer">
                    <div className="row">
                        <div className="col-sm my-3">
                            <h5>Who We Are</h5>
                            <Link className="nav-link text-custom" to='/about'> About Us </Link>
                            <Link className="nav-link text-custom" to='/ward'> Ward </Link>
                            <Link className="nav-link text-custom" to='/portfolio'> Portfolio </Link>
                        </div>
                        <div className="col-sm my-3">
                            <h5>What We Do</h5>
                            <Link className="nav-link text-custom" to='/research'> Research </Link>
                            {/* <a href="./academic.html" className="nav-link text-custom">Academic</a> */}
                            <Link className="nav-link text-custom" to='/services'> Services </Link>
                        </div>
                        <div className="col-sm my-3">
                            <h5>Support Our Dialysis Center</h5>
                            <Link to="/donate" className="nav-link text-custom">Donate</Link>
                        </div>
                        <div className="col-sm my-3">
                            <h5>Work With Us</h5>
                            <Link className="nav-link text-custom" to="/bids">Bids</Link>
                        </div>
                        <div className="col-sm my-3">
                            <h5>Other Links</h5>
                            <Link to="/contact" className="nav-link text-custom">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="middle-footer">
                    <div className="card py-3">
                        <div className="title center">
                            <h4 className="text-center">Subscribe to our Newsletter</h4>
                        </div>
                        <form className="form-inline">
                            <div className="form-group mx-sm-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>

                            <button type="submit" className="btn btn-login btn-primary">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bottom-footer my-4">
                    <div className="row mx-auto gap-4">
                        <div className="col-sm">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                                <span>
                                    <h3 className="text-custom">SHYCRH</h3>
                                </span>
                            </div>
                            <div>
                                <p>
                                    SHYCRH
                                    <span>
                                        Jigjiga City,kebele 07
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>Phone No: +251-257-752783, +251-912 -619234</p>
                            </div>
                            <div>
                                <p>Fax: +251-257-755976</p>
                            </div>
                            <p>P.o.Box: 919</p>
                            <a href="#" className="nav-link text-custom">Privacy and Cookie Policy</a>
                        </div>
                        <div className="col-sm">
                            <p>Help Desk</p>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p>Call - 1234</p>
                                </li>
                                {/* <li className="list-group-item mt-2">
                                <a
                                    type="button"
                                    className="nav-item nav-link donate"
                                    data-toggle="modal"
                                    data-target="#appointment"
                                >
                                    Book Appointment
                                </a>
                            </li> */}
                            </ul>
                        </div>
                        <div className="col-sm">
                            <p>Socials</p>
                            <nav>
                                <div className="links-social py-1 my-3">
                                    <a className='px-2' href="https://www.facebook.com/jjushyrh"
                                    ><FaFacebookF style={{ fontSize: '28px' }} /></a>

                                    <a className='px-2' href="http://www.twitter.com/jureferal "
                                    ><FaTwitter style={{ fontSize: '28px' }}/>
                                    </a>
                                    <a className='px-2' href="http://t.me/jjushyrh"
                                    ><FaTelegram style={{ fontSize: '28px' }}/></a>
                                    <a className='px-2' href="http://www.instagram.com/jjushyrh"
                                    ><FaInstagram style={{ fontSize: '28px' }}/></a>
                                    <a className='px-2' href="https://www.youtube.com/@sheikhhassanyabarereferral4347"
                                    ><FaYoutube style={{ fontSize: '28px' }}/></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;