import "./DashboardPage.scss";
import React, {useState, useEffect} from "react";
import ViewNews from "../ViewNews";
import Api from "../../api/api";

const api = new Api();

const DashboardPage = () => {

    const [allNews, setAllnews] = useState(null);

    useEffect(() => {
        api.blog().then((response) => setAllnews(response));
    }, []);

    return (
        <>
        <h3>
            Apka umożliwia umawianie się na spacery 
        </h3>
        <br/>
        <div className={"dashboard-div"}>
            <ViewNews newsItems={allNews}/>          
           
        </div>
        </>)
};

export default DashboardPage;

