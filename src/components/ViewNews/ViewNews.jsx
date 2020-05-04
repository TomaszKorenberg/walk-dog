import React from "react";
import PropTypes from "prop-types";
import styles from "./ViewNews.module.scss";


const ViewNews = ({newsItems}) => {
    if (!newsItems) {
        return (<p>Ładuję...</p>)
    }

    return (

        <div className={styles.wrapper}>
            {
                // todo:napisać komponent wyświetlający każdy news na nowej stronie po klinięciu na niego
            }
            <p>Aktualności:</p><br/>
            <div className={styles.newsWrapper}>
            {newsItems.map((item) =>
                <a href={"/blog/" + item.id}
                   key={item.id}
                    className={styles.newsLink}>
                        <div key={item.id} className={styles.newsDiv} id={"news-div-id-" + item.id}>
                            <p><b>{item.header}</b></p>
                            <p>{item.article}</p>
                        </div>

                </a>
            )}
            </div>
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
