import { useState } from "react";
import Pagination from "./Pagination";
import React from "react";
import article_data from "../../assets/article_data.json"
import { Link } from "react-router-dom";
import { ScrollToTop } from "../Helpers/Helpers";
import './HomeArticleTiles.css'

const Tile = props => (
    <div className="home-main-tile">
    <h1>{props.name}</h1>
    <br></br>
    <p className='article-meta'>{props.articleMeta}</p>
    <div className="home-main-tile-content">
        <img src={require(`../../assets/images/${props.image}.png`)} className='home-main-tile-content-img' width="300px" alt="Cat"></img>
        <br></br>
        <div className="home-main-tile-content-text">
            <article>
            <p className="summary-text">{props.description}</p>
            </article>
            <br></br>
        </div>
    </div>
    <Link to={{pathname:"/blog",search:`?id=${props.id}`}}><button className="read-more-button">Read More</button></Link>
    </div>
)


const HomeArticleTiles = () => {
    const [currentPage, setCurrentPage] = useState(1);

    var pageLimit = 3;
    var totalArticles = article_data.length;
    var articleMin = (currentPage - 1)*3;
    var articleMax = Math.min((currentPage)*3,totalArticles+1);
    var visibleArticles = article_data.slice(articleMin,articleMax);

    const articleDisplay = visibleArticles.map((a,idx) => (
            <Tile key={a.id} id={a.id} name={a.name} description={a.description} articleMeta={`Published: ${a.created_date} by Ashley Dees | Last Updated: ${a.updated_date}`} image={a.image}/>
        )
    )

    return (
        <>
            {articleDisplay}
            <div className='pagination-container'>
                <Pagination
                    currentPage={currentPage}
                    total={totalArticles}
                    limit={pageLimit}
                    onPageChange={(page) => {
                        setCurrentPage(page)
                    }
                }
                />
            </div>
            <ScrollToTop />
        </>
    )
}

export default HomeArticleTiles;