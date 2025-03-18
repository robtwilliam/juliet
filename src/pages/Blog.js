import React from "react";
import { useSearchParams } from "react-router-dom";
import article_data from "../assets/article_data.json"
import "./pages.css";
import { Link } from "react-router-dom";
import AboutTile from "../components/AboutTile/AboutTile";
import parse from 'html-react-parser';
import { useEffect } from "react";

const Blog = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const articleContent =  article_data.filter((item) => {return item.id === id})[0]
    const articleMeta = `Published: ${articleContent.created_date} by Ashley Dees | Last Updated: ${articleContent.updated_date}`
    function useChangeTitle(articleContent) {
        useEffect(() => {
            document.title = `Juliet | ${articleContent.name}`;
            // Optional: Reset title when component unmounts
            return () => {
            document.title = 'Juliet';
            };
        }, [articleContent]);
    }
    useChangeTitle(articleContent);
    return (
        <div className="home-content">
        <div className="home-main">
            <div className="arrow-link"><Link to="/">Home</Link> {" > "} Article</div>
            <br></br>
            <br></br>
            <h1>{articleContent.name}</h1>
            <p className='article-meta'>{articleMeta}</p>
            <br></br>
            <div className="home-tile-content">
                <img src={require(`../assets/images/${articleContent.image}.png`)} alt={articleContent.image} width="100%"></img>
                <br></br>
                <br></br>
                <article>
                {articleContent.article ? articleContent.content.map((text, idx) => <p className="paragraph-text" key={idx}>{parse(text)}</p> ) : articleContent.content.map((text, idx) => parse(text))}
                </article>
                <br></br>
            </div>
        </div>
        <div className="home-side">
          <AboutTile />
        </div>
        </div>
    )
}

export default Blog;