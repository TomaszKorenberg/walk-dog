import "./DashboardPage.scss";
import React, {useState, useEffect} from "react";
import ViewNews from "../NewsView";
import jsonPlaceholderB from "../../api/jsonPlaceholderB";



const DashboardPage = () => {

    const [allNews, setAllnews] = useState(null);

    useEffect(() => {
        jsonPlaceholderB().then((response) => setAllnews(response));
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

