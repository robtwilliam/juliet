import React from "react";
import { Link } from "react-router-dom";
import "./AboutTile.css";

const AboutTile = () => {
    return (
    <div className="about">
        <img id="author" src={require('../../assets/images/about_square.jpg')} alt="author"></img>
        <div className="about-text">
        <h4>
            <Link to="/about" className="abtile__link">About</Link> | <Link to="/faq" className="abtile__link">FAQ</Link> | <Link to="/contact" className="abtile__link">Contact</Link>
        </h4>
        <p className="summary-text">
            Once Upon A Time, There Was A Girl Who Really Loved Cats. It Was Me. The End.
        </p>
        </div>
    </div>
    )
}

export default AboutTile;