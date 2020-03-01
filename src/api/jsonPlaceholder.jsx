import {getToken} from "./../utils/token";

export default () =>
{
    return fetch('http://localhost:3001/walks', {headers: {'Token': getToken()}})
        .then(response => response.json())

};
