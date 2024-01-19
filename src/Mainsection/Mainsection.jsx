import React from "react";
import './Mainsection.css';

const Mainsection = ()=>{
    return(
        <>
            <div className="main-hero section" id="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="banner-img">
                                <img src="img/banner.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-design">
                                <div className="form-head">
                                    <h2>Quick Enquiry</h2>
                                </div>
                                <div className="login-box">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="text" name="" required=""/>
                                                <label>Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="email" name="" required=""/>
                                                <label>Email</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="number" name="" required=""/>
                                                <label>Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="number" name="" required="" />
                                                <label>Quantity</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6 mb-3">
                                                <div className="user-box">
                                                <select name="" id="">
                                                    <option value="">Select Category</option>
                                                    <option value="">Bags</option>
                                                    <option value="">Diary</option>
                                                    <option value="">Pen</option>
                                                    <option value="">Quick Dispatch (Key Chain, Card Holder, Pen Stand)</option>
                                                    <option value="">T-shirt</option>
                                                    <option value="">Bottles</option>
                                                    <option value="">Gifts Set</option>
                                                    <option value="">Welcome Employees Kit</option>
                                                    <option value="">Lifestyle Product (Jacket, Trouser, Caps)</option>
                                                    <option value="">Trophies and Award</option>
                                                    <option value="">Tech Gadgets(Ear Buds, Watches)</option>
                                                    <option value="">Lunch Set</option>
                                                    <option value="">Handicraft, Ethnics</option>
                                                    <option value="">Corporate Gifts Under 500</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="user-box">
                                                <textarea></textarea>
                                                <label>Comments</label>
                                                </div>
                                            </div>
                                        </div>
                                    <button className="submit-btn">SEND</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mainsection;