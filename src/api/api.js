import {getToken} from "./../utils/token";

class Api {

    constructor () {
        this.port = 3001;
        this.baseUrl = 'http://localhost' + ":";
        this.walksUrl = this.baseUrl + this.port +'/walks/';
        this.blogUrl = this.baseUrl + this.port +'/blog/';
        this.userUrl = this.baseUrl + this.port +'/user/';
        this.petsUrl = this.baseUrl + this.port +'/pets/';
        this.commentsUrl = this.baseUrl + this.port +'/comments/';
    }


    insertComment = (data) => {
        fetch (this.commentsUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Token': getToken()},
            body: JSON.stringify({data})
        })
    };

    getCommentsByWalkId = (walkId) => {
        fetch(this.commentsUrl + walkId, {headers: {'Token': getToken()}})
    };

    walks = () => {
        return fetch(this.walksUrl, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    getWalk = (walkId) => {
        return fetch(this.walksUrl + walkId, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    getAllArticles = () => {
        return fetch(this.blogUrl)
            .then(response => response.json())
    };

    getArticle = (articleId) => {
        return fetch(this.blogUrl + articleId)
            .then(response => response.json())
    };

    user = () => {
        return fetch(this.userUrl, {headers: {'Token': getToken()}})
            .then(response => response.json())
    };

    userPets = (userName) => {
        return fetch(this.petsUrl, {headers: {'Token': getToken(), "User": userName}})
            .then(response =>  response.json())
    }


}

export default Api