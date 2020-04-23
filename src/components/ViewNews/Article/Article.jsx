import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Api from "../../../api/api";

const api = new Api();

const Article = () => {

    const {articleId} = useParams();
    const [article, setArticle] = useState(null);


    useEffect(() => {
        api.getArticle(articleId).then(response => setArticle(response[0]));
    }, []   );

    if (!article) {
        return (<p>Loading...</p>)
    }
    return (


        <div>
            <h1>{article.header}</h1>
            <p>{article.article}</p>
            <p>Autor: {article.author}</p>

        </div>
    )
};

export default Article;

