import React, {useState, useEffect} from "react";
import Api from "../../api/api";

const api = new Api();

const Article = ({articleId}) => {


    useEffect(() => {
        api.getArticle(articleId).then(response => console.log(response));
    }, []);

    return (
        <div>Artykuł</div>
        )
};

export default Article;

