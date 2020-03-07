import {getToken} from "./../utils/token";

class Api {

    walks = () => {
        return fetch('http://localhost:3001/walks', {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    blog = () => {
        return fetch('http://localhost:3001/blog')
            .then(response => response.json())
    };

    user = () => {
        return fetch('http://localhost:3001/user', {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    userPets = (userName) => {
        return fetch('http://localhost:3001/pets', {headers: {'Token': getToken(), "User": userName}})
            .then(response =>  response.json())
    }


}

export default Api