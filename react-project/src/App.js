import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Places from "./Pages/Places";
import Signup from "./Pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Package from "./Pages/Package";
import TripReg from "./Pages/TripReg.jsx";
import Bikes from "./Pages/Bikes";
import Addbike from "./Pages/addBike.jsx";
import Bike from "./Pages/bike.jsx";
import BikeDetails from "./Pages/bikeDetails";
import Soon from "./Pages/Soon.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Mangalore from "./Pages/Mangalore";
import Bangalore from "./Pages/Bangalore";
import Mysuru from "./Pages/Mysuru";
import Hampi from "./Pages/Hampi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Places />} path="/Places" />
          <Route element={<Package />} path="/Package" />
          <Route element={<TripReg />} path="/Form" />
          <Route path="/Soon" element={<Soon />} />
          <Route path="/Bikes" element={<Bikes />} />
          <Route path="/Addbike" element={<Addbike />} />
          <Route path="/Bike" element={<Bike />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
          <Route element={<Mangalore />} path="/Mangalore"/>
          <Route element={<Bangalore />} path="/Bangalore"/>
          <Route element={<Mysuru />} path="/Mysuru"/>
          
          <Route element={<Hampi />} path="/Hampi"/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
