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

    const onTitleChange = ({target: {value}}) => setNewsTitle(value);
    const onArticleChange = ({target: {value}}) => setNewsArticle(value);
    const onAuthorChange = ({target: {value}}) => setNewsAuthor(value);



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

        if(!newsTitle || !newsArticle || !newsAuthor){
            return
        }

        fetch(
            'http://localhost:3001/blog',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({newsTitle, newsArticle, newsAuthor})
            }
        )
    };


    //todo: zrobić komponet strony 401


    return (
        <div className={"admin-div"}>

            <div>
                <p>Dodaj nowy wpis:</p>
                <div>
                    <form action="">
                        <label htmlFor="header">Tytuł:</label>
                        <input type="text" name="add-news" id="header" onChange={onTitleChange}/>
                        {newsTitle ? null : <p> Uzupełnij wymagane pole! </p>}
                        <label htmlFor="article">Treść:</label>
                        <input type="text" name="add-news" id="article" onChange={onArticleChange}/>
                        {newsArticle ? null : <p> Uzupełnij wymagane pole! </p>}
                        <label htmlFor="author">Autor:</label>
                        <input type="text" name="add-news" id="author" onChange={onAuthorChange}/>
                        {newsAuthor ? null : <p> Uzupełnij wymagane pole! </p>}

                        {
                            //fixme: poprawić aby po dodaniu artykułu czysciły sie pola formularza i renderowała na nowo tabela
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

};

export default DashboardPage;

