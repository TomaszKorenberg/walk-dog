import "./DashboardPage.module.scss";
import React, {useState, useEffect} from "react";
import ViewNews from "../../components/ViewNews/ViewNews";
import Api from "../../api/api";

const api = new Api();

const DashboardPage = () => {

    const [allNews, setAllnews] = useState(null);

    useEffect(() => {
        api.getAllArticles().then((response) => setAllnews(response));
    }, []);

    return (
        <>
        <h2>
            Witaj na WalkDog!
        </h2>
        <br/>
        <div>
            <ViewNews newsItems={allNews}/>
        </div>
        </>)
};

export default DashboardPage;

