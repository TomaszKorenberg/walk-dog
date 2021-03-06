import React, {useEffect, useState} from "react";
import {getToken} from "../../utils/token";
import ViewNewsForAdmin from "../../components/ViewNewsForAdmin/ViewNewsForAdmin";
import Api from "../../api/api";

const api = new Api();

const DashboardPage = () => {

        const [allNews, setAllNews] = useState(null);
        const [newsTitle, setNewsTitle] = useState(null);
        const [newsArticle, setNewsArticle] = useState(null);
        const [newsAuthor, setNewsAuthor] = useState(null);

        const onTitleChange = ({target: {value}}) => setNewsTitle(value);
        const onArticleChange = ({target: {value}}) => {setNewsArticle(value)};
        const onAuthorChange = ({target: {value}}) => setNewsAuthor(value);


        useEffect(() => {
            api.getAllArticles().then((response) => setAllNews(response));
        }, []);


        fetch(
            'http://localhost:3001/admin',
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Token': getToken()},
            }
        );


        const onSubmit = (e) => {
            e.preventDefault();



            api.insertArticle(newsTitle, newsArticle, newsAuthor)
                .then((response) => {
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

                            <label htmlFor="header">Tytuł:</label>
                            <input type="text" name={"add-news"} id={"header"} onChange={onTitleChange}/>
                            <label htmlFor="article">Treść:</label>
                            <textarea name="add-news" id="article" onChange={onArticleChange}/>
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

