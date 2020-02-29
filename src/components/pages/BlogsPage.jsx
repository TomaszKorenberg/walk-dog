import "./BlogsPage.scss";
import React, {useState, useEffect} from "react";
import {getToken} from "../../utils/token";
import ViewBlog from "./BlogsView";
import jsonPlaceholder from "../../api/jsonPlaceholderB";
import jsonPlaceholderB from "../../api/jsonPlaceholderB";

const BlogsPage = () => {

    // const [header, setHeader] = useState(null);
    // const [article, setArticle] = useState(null);
    // const [author, setAuthor] = useState(null);
    
    // const [allBlogs, setAllBlogs] = useState(["Waiting..."]);


    // const onHeaderChange = ({target: {value}}) => setHeader(value);
    // const onArticleChange = ({target: {value}}) => setArticle(value);
    // const onAuthorChange = ({target: {value}}) => setAuthor(value);
    

    /**
     * Get blogs and send to ViewBlogs component
     */
    useEffect(() => {
        jsonPlaceholderB().then((response) => setAllBlogs(response));
    }, []);

    /**
     * Add new blog
     */

    const onSubmit = (e) => {
        e.preventDefault();

        fetch(
            'http://localhost:3001/',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Token': getToken()},
                body: JSON.stringify({header, article, author})
            }
        ).then((response) => response.json).then(() => {
            window.location.href = "/blog";
        });
    };


    return (
        <div className={"container"}>
            <ViewBlogs blogItems={allBlogs}/>
           
        </div>)
};

export default BlogsPage;
