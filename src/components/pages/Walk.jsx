import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Api from "../../api/api";
import {getToken} from "../../utils/token";

const api = new Api();

const Walk = () => {



    const {walkId} = useParams();
    const [walk, setWalk] = useState(null);



    useEffect(() => {
        api.getWalk(walkId).then(response => setWalk(response[0]));
    }, []);

    if (!walk) {
        return (<p>Loading walk...</p>)
    }
    return (


        <div>
            <p>Sparer:</p>
            <p>ID: {walk.id}</p>
            <p>Miejsce: {walk.place}</p>
            <p>Data: {walk.date}</p>
            <p>Godzina: {walk.hour}</p>
            <p>Opis: {walk.description}</p>



        </div>
    )
};

export default Walk;

