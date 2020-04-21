import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Comments from "../Comments/Comments";
import Api from "../../api/api";

const api = new Api();

const Walk = () => {



    const {walkId} = useParams();
    const [walk, setWalk] = useState(null);
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        api.getWalk(walkId).then(response => setWalk(response[0]));
        api.user().then(response => setUserData(response));

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

            {
                //todo: dopisać komponent forum/czatu w spacerze aby ludzie mogli do siebie pisać - przykład:
                //https://www.qcode.in/learn-react-by-creating-a-comment-app/
                //https://github.com/saqueib/react-comments
            }
            <Comments walkId={walk.id} user={userData}/>
        </div>
    )
};

export default Walk;

