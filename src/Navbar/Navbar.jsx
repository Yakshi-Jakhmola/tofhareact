import React from "react";
import './Navbar.css';

const Navbar = () =>{
    var menubar = document.querySelector(".open-menu");
    var mobilemenu = document.querySelector(".mobile-device");
    var closemenu = document.querySelector(".mobile-menu-close");

    menubar.addEventListener("click", function(){
    mobilemenu.classList.add("active");
    });
    closemenu.addEventListener("click", function(){
    mobilemenu.classList.remove("active");
    });
    return(
        <>
            <div className="header_design">
                <div className="logo_design">
                    <a href="#"><img src="img/logo.png"/></a>
                </div>
                <div className="menu_design">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Client</a></li>
                        <li><a href="#">Why Choose Us</a></li>
                    </ul>
                </div>
                <div className="phone_number">
                    <a href="tel:+91 8448748957"> <i class="fa-solid fa-phone-volume"></i>  +91 8448748957</a>
                </div>
                <div className="menu_bar">
                    <i class="fa-solid fa-bars  open-menu"></i>
                </div>
            </div>
            <div className="mobile-device">
                <div className="mobile-logo">
                    <img src="img/white-logo.png" alt=""/>
                </div>
                <div className="close-bar">
                    <i className="fa-solid fa-xmark mobile-menu-close"></i>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#category">Category</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#client">Client</a></li>
                        <li><a href="#why-choose">Why Choose Us</a></li>
                    </ul>
                </div>
                <div className="mobile-number mt-3">
                    <a href="tel: +91 8448748957">+91 8448748957</a>
                </div>
                <div className="mobile-email mt-3">
                    <a href="mailto: sales@buytohfa.com ">sales@buytohfa.com</a>
                </div>
                <div className="mobile-social-media">
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;