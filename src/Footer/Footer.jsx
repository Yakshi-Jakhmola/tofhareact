import React from "react";
import './footer.css';

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="footer-content">
                                <div className="footer-logo">
                                    <img src="img/white-logo.png" alt="tofha-logo"/>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><a>Home</a></li>
                                        <li><a>Service</a></li>
                                        <li><a>Category</a></li>
                                        <li><a>Client</a></li>
                                        <li><a>Why Choose Us</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>
                                </div>
                                <div className="footer-social-link">
                                    <ul>
                                        <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom-footer">
                <p>© Copyright All Right Reserved by <a href="https://brandingwaale.com/"> Brandingwaale.com</a></p>
            </div>
            <a href="https://wa.me/918448748957?text=tofha.com" className="whatsapp">
                <img src="img/whatsapp.png" alt="whatsapp"/>
            </a>
        </>
    )
}
export default Footer;