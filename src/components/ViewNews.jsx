import React from "react";
import PropTypes from "prop-types";
import "./ViewNews.scss"
import ViewArticle from "./pages/ViewArticle";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const ViewNews = ({newsItems}) => {
    if (!newsItems) {
        return (<p>Loading...</p>)
    }

    return (
        <div>
            {
                // todo:napisać komponent wyświetlający każdy news na nowej stronie po klinięciu na niego
            }
            <p>Aktualności:</p><br/>

            {newsItems.map(item =>
                <a href={<ViewArticle bb={item.id}/>} id={"news-link-id-"}>)

                    <div className={"news-container"}>

                            <div key={item.id} className={"news-div"} id={"news-div-id-" + item.id}>
                                <p><b>{item.header}</b></p>
                                <p>{item.article}</p>
                            </div>
                    </div>

                </a>
            )}
            {
                //fixme: wyświetla nawias na górze ^^^ + nie wiem jak zrobi przekierowanie na konkrety artykuł
            }
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
