import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Mainsection.css';

const Mainsection = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] =useState("");
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState("");

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    const submitbtn = (i) =>{
        i.preventDefault();
        try{
            if(name == ""){
                toast.warning("Name Field is Blank!...")
            }
            else if(name.length < 2){
                toast.warning("Name Greather Then 2")
            }
            else if(email == ""){
                toast.warning("Email Field is Blank!...")
            }
            else if(atposition < 3 || dotposition < atposition + 2 || dotposition + 2 >= email.length){
                toast.warning("Your Email is Worng...")
            }
            else if(phone == ""){
                toast.warning("Phone Number Field is Blank!...")
            }
            else if(phone.length <= 9 || phone.length >= 11){
                toast.warning("Enter the Number Between 1 to 9")
            }
            else if(quantity == ""){
                toast.warning("Quanity Field is Empty!.....")
            }
            else if(quantity.length <= 0){
                toast.warning("Minimum Quantity value is 1");
            }
            else if (comment == ""){
                toast.warning("Please Fill this Field!....")
            }
            else if(comment.length < 10){
                toast.warning("Write a Comment Greather then 10 words")
            }
            else{
                toast.success("Thank You For Submission")
            }
        }
        catch(e){
            console.log(e)
        };

    }
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
                                                <input type="text" name="" required value={name} onChange={(i) => setName(i.target.value)}/>
                                                <label>Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="email" name="" required value={email} onChange={(i) => setEmail(i.target.value)}/>
                                                <label>Email</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="number" name="" required value={phone} onChange={(i) => setPhone(i.target.value)}/>
                                                <label>Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-3">
                                                <div className="user-box">
                                                <input type="number" name="" required value={quantity} onChange={(i) => setQuantity(i.target.value)}/>
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
                                                <textarea value={comment} onChange={(i) => setComment(i.target.value)}></textarea>
                                                <label>Comments</label>
                                                </div>
                                            </div>
                                        </div>
                                    <button className="submit-btn" onClick={submitbtn}>SEND</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </>
    )
}
export default Mainsection;