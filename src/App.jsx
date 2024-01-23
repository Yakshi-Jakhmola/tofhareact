import React from "react";
import Navbar from "./Navbar/Navbar";
import Mainsection from "./Mainsection/Mainsection";
import Category from "./Category/Category";
import Cards from "./Cards/Cards";
import Clients from "./Clients/Clients";
import Whychoose from "./Whychoose/Whychoose";
import Footer from "./Footer/Footer";
function App() {
  return(
    <>
      <Navbar/>
      <Mainsection/>
      <Category/>
      <Cards/>
      <Clients/>
      <Whychoose/>
      <Footer/>
    </>
  )
}

export default App
