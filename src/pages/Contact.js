import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import AboutTile from "../components/AboutTile/AboutTile";
import ContactForm from "../components/ContactForm/ContactForm"


const Contact = () => {
    return (
        <div className="home-content">
        <div className="home-main">
            <div className="arrow-link"><Link to="/juliet">Home</Link> {" > "} Contact</div>
            <br></br>
            <h1>Contact Us</h1>
            <br></br>
            <p>For general inquiries, feedback, and advertising opportunities, please contact us through the form below.</p>
            <br></br>
            <ContactForm />
        </div>
        <div className="home-side">
              <AboutTile />
        </div>
        </div>
    )
}

export default Contact;