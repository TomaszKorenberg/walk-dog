import React from "react";
import PropTypes from "prop-types";




const ViewNews = ({newsItems}) => {
    if (!newsItems){
        return (<p>Loading...</p>)
    }

    return (
    <div>
        <p>Aktualności:</p>
        <div>
            {newsItems.map((item) => <div>{item.id}</div>)}
        </div>
        <br/>
    </div>
)};

ViewNews.propTypes = {
    newsItems: PropTypes.array
};

ViewNews.defaultProps = {
    newsItems: []
};


export default ViewNews;
