import React from "react";
import PropTypes from "prop-types";

const ViewNews = ({newsItems}) => {
    if (!newsItems) {
        return (<p>Loading...</p>)
    }

    return (
        <div>
            {
                // todo:napisać komponent wyświetlający każdy news na nowej stronie po klinięciu na niego
            }
            <p>Aktualności:</p>
            <div>
                {newsItems.map((item) =>
                    <div>
                        <h1>  {item.header}
                        </h1>
                        <p>
                            {item.article}
                        </p>

                    </div>)}
            </div>
            <br/>
        </div>
    )
};

ViewNews.propTypes = {
    newsItems: PropTypes.array
};

ViewNews.defaultProps = {
    newsItems: []
};


export default ViewNews;
