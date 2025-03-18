import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import AboutTile from "../components/AboutTile/AboutTile";
import parse from 'html-react-parser';
import faqs from '../assets/faq.json';


const Faq = () => {
    return (
        <div className="home-content">
        <div className="home-main">
            <div className="arrow-link"><Link to="/juliet">Home</Link> {" > "} FAQ</div>
            <br></br>
            <h1>Frequently Asked Questions</h1>
            <br></br>
            <article>
            {faqs.map((content,idx) => <div className="question-answer"><br></br><p className="faq-question" key={idx}>{content.question}</p><p className="paragraph-text">{parse(content.answer)}</p></div>)}
            </article>
        </div>
        <div className="home-side">
              <AboutTile />
        </div>
        </div>
    )
}

export default Faq;