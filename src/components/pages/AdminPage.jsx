import "./AdminPage.scss";
import React, {useEffect, useState} from "react";
import {getToken} from "../../utils/token";
import ViewNewsForAdmin from "../ViewNewsForAdmin";
import Api from "../../api/api";

const api = new Api();

const DashboardPage = () => {

        const [allNews, setAllnews] = useState(null);
        const [newsTitle, setNewsTitle] = useState(null);
        const [newsArticle, setNewsArticle] = useState(null);
        const [newsAuthor, setNewsAuthor] = useState(null);

        const [isAuthorValid, setIsAuthorValid] = useState(true);
        const [isTitleValid, setIsTitleValid] = useState(true);
        const [isArticleValid, setIsArticleValid] = useState(true);

        const onTitleChange = ({target: {value}}) => setNewsTitle(value);
        const onArticleChange = ({target: {value}}) => setNewsArticle(value);
        const onAuthorChange = ({target: {value}}) => setNewsAuthor(value);

        const checkAuthor = (value) => {
            const authorRegEx = /[A-Za-z]/;
            return authorRegEx.test(value);
        };

        const checkTitle = (value) => {
            const emailRegEx = /^[a-z][a-z\s]*$ {0,200}/;
            return emailRegEx.test(value);
        };
        const checkArticle = (value) => {
            if (value !== null) {
                if (value.length > 0) {
                    return true;
                }
            }
            return false
        };

        useEffect(() => {
            api.blog().then((response) => setAllnews(response));
        }, []);


        fetch(
            'http://localhost:3001/admin',
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Token': getToken()},
            }
        )
            .then(result => {
                if (result.status === 200) {
                    console.log("Wyświetl stronę administratora")
                } else {
                    console.log("Wyświetl stronę 401")
                }
            });

        const onSubmit = (e) => {
            e.preventDefault();

            if (checkTitle(newsTitle)) {
                setIsTitleValid(false);
            }
            if (checkArticle(newsArticle)) {
                setIsArticleValid(false);
            }
            if (checkAuthor(newsAuthor)) {
                setIsAuthorValid(false);
            }

            fetch(
                'http://localhost:3001/blog',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({newsTitle, newsArticle, newsAuthor})
                }
            ).then((response) => {
                if (response.status !== 200) {
                    alert("something went wrong, 401")
                }
            });

        };


//todo: zrobić komponet strony 401


        return (
            <div className={"admin-div"}>

                <div>
                    <p>Dodaj nowy wpis:</p>
                    <div>
                        <form action="">
                            {isTitleValid ? null : <p style={{color: "red"}}>proszę wpisz poprawny tytuł</p>}
                            <label htmlFor="header">Tytuł:</label>
                            <input type="text" name={"add-news"} id={"header"} onChange={onTitleChange}/>
                            {isArticleValid ? null : <p style={{color: "red"}}>proszę wpisz poprawną treść</p>}
                            <label htmlFor="article">Treść:</label>
                            <textarea name="add-news" id="article" onChange={onArticleChange}/>
                            {isAuthorValid ? null : <p style={{color: "red"}}>proszę wpisz poprawnego autora</p>}
                            <label htmlFor="author">Autor:</label>
                            <input type="text" name="add-news" id="author" onChange={onAuthorChange}/>

                            {
                                //fixme: poprawić aby po dodaniu artykułu czysciły sie pola formularza i renderowała na nowa tabela

                            }

                            <button onClick={onSubmit}> Dodaj</button>
                            <br/>
                        </form>
                    </div>
                    <div>
                        <ViewNewsForAdmin newsItems={allNews}/>
                    </div>
                </div>

            </div>)

    }
;

export default DashboardPage;

