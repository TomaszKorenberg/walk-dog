import {getToken} from "./../utils/token";

class Api {

    constructor() {
        this.port = 3001;
        this.baseUrl = 'http://localhost' + ":";
        this.walksUrl = this.baseUrl + this.port + '/walks/';
        this.blogUrl = this.baseUrl + this.port + '/blog/';
        this.userUrl = this.baseUrl + this.port + '/user/';
        this.petsUrl = this.baseUrl + this.port + '/pets/';
        this.commentsUrl = this.baseUrl + this.port + '/comments/';
        this.registerUrl = this.baseUrl + this.port + '/user/register/';
        this.loginUrl = this.baseUrl + this.port + '/user/login/';
        this.contentTypeJSON = "application/json";
    }


    insertComment = (data) => {

        return fetch(this.commentsUrl, {
                method: 'POST',
                headers: {'Content-Type': this.contentTypeJSON, 'Token': getToken()},
                body: JSON.stringify({data})
            }
        )
    };

    getCommentsByWalkId = (walkId) => {
        return fetch(this.commentsUrl + walkId, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    walks = () => {
        return fetch(this.walksUrl, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    getWalk = (walkId) => {
        return fetch(this.walksUrl + walkId, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    insertWalk = (place, date, hour, dogName, description) => {
        return fetch(
            this.walksUrl,
            {
                method: 'POST',
                headers: {'Content-Type': this.contentTypeJSON, 'Token': getToken()},
                body: JSON.stringify({place, date, hour, dogName, description})
            }
        )
    };

    getAllArticles = () => {
        return fetch(this.blogUrl)
            .then(response => response.json())
    };

    getArticle = (articleId) => {
        return fetch(this.blogUrl + articleId)
            .then(response => response.json())
    };

    insertArticle = (newsTitle, newsArticle, newsAuthor) => {
    return fetch(
    this.blogUrl,
{
    method: 'POST',
    headers: {'Content-Type': this.contentTypeJSON},
    body: JSON.stringify({newsTitle, newsArticle, newsAuthor})
}
)};

    deleteArticle = (id) => {
        return fetch(
            this.blogUrl,
            {
                method: 'DELETE',
                headers: {'Content-Type': this.contentTypeJSON},
                body: JSON.stringify({id})
            }
        )
    };

    user = () => {
        return fetch(this.userUrl, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    registerUser = (email, password, name, surname, nickname) => {
        return fetch(
            this.registerUrl,
            {
                method: 'POST',
                headers: {'Content-Type': this.contentTypeJSON},
                body: JSON.stringify({email, password, name, surname, nickname})
            }
        )
    };


    loginUser = (email, password) => {
        return fetch(
            this.loginUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': this.contentTypeJSON,
                    'Token': getToken()
                },
                body: JSON.stringify({email, password})
            }
        )
    };

    insertPet = (dogName, race, size, age, userInfo) => {
        return fetch(
            this.petsUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': this.contentTypeJSON,
                    'Token': getToken()
                },
                body: JSON.stringify({dogName, race, size, age, userInfo})
            }
        )
    };

    getUserPets = (userName) => {
        return fetch(this.petsUrl, {headers: {'Token': getToken(), "User": userName}})
            .then(response => response.json())
    }


}

export default Api