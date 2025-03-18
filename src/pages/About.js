import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import AboutTile from "../components/AboutTile/AboutTile";


const About = () => {
    return (
        <div className="home-content">
        <div className="home-main">
            <div className="arrow-link"><Link to="/juliet">Home</Link> {" > "} About</div>
            <br></br>
            <h1>About Me</h1>
            <br></br>
            <p className="paragraph-text">Ever since I was four, I’ve wanted a cat more than anything. I used to dream about the day I’d finally have one of my own, and now here I am at 35, living the dream with two amazing, silly, and totally spoiled cat girls—Juliet and Olivia. Honestly, they make my life so much better, and I can’t imagine it without them.</p>
            <br></br>
            <img src={require(`../assets/images/ashleyjulietabout.png`)} alt="Ashley and Juliet" width="100%"></img>
            <br></br><br></br><br></br>
            <article>
            <p className="paragraph-text">Juliet is basically my furry twin. She’s all about the snuggs—especially at night, when she curls up next to me, lays her head on my pillow like a little human, and waits for me to tuck her in with the comforter. It’s adorable and ridiculous at the same time. Olivia, on the other hand, is the life of the party. She’s super friendly, loves meeting new people, and is always exploring. She’s particularly fond of opening cabinet doors (no secrets are safe) and walking out onto our balcony to bird-watch from the roof like she’s on some kind of mission.</p>
            <p className="paragraph-text">They keep us laughing every day, and I honestly feel like the luckiest person in the world. They bring so much joy, chaos, and purpose to my life—and I wouldn’t have it any other way.</p>
            </article>
        </div>
        <div className="home-side">
              <AboutTile />
        </div>
        </div>
    )
}

export default About;