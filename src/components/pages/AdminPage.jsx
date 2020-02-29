import "./AdminPage.scss";
import React from "react";
import {getToken} from "../../utils/token";


const DashboardPage = () => {



    fetch(
        'http://localhost:3001/admin',
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Token': getToken()},
        }
    )
       .then(result => {
           if (result.status === 200){
               console.log("Wyświetl stronę administratora")
           }
           else{
               console.log("Wyświetl stronę 401")
           }
       });


    //todo: zrobić komponet strony 401



    return(
    <div className={"admin-div"}>

        Admin Page

    </div>)

};

export default DashboardPage;

