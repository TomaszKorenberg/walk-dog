export default () =>
{

    return fetch('http://localhost:3001/walks')
        .then(response => response.json())


};
