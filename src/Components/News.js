import React from "react";

import news from '../news.json';
import './News.css';
function News(){
    const container = {
        backgroundImage: `url(${news.imagen})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    return (
    <div className="new">
        <div className="image-container" style={container}></div>
        <div className="info-container">
            <h2><a href="#" className="link-new">{news.titulo}</a></h2>
            <p>{news.contenido}</p>
            <div className="news-footer">
                <span>Red CEMERI</span>
            </div>
        </div>
    </div>
    );
}
export default News;