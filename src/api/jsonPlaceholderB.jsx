export default () =>
{
    return fetch('http://localhost:3001/blog')
        .then(response => response.json())

};