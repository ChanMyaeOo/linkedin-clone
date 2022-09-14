import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle(
                "React new version is released ",
                "tech news - 9009 readers"
            )}
            {newsArticle("Bitcoin price $4000", "news - 50000 readers")}
            {newsArticle("Covid19 ended ", "top news - 90000 readers")}
            {newsArticle("Tesla is back", "news - 3000 readers")}
        </div>
    );
}

export default Widgets;
