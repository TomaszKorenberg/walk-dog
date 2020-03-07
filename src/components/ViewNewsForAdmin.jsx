import React from "react";
import PropTypes from "prop-types";
import "./ViewNewsForAdmin.scss";

const ViewNewsForAdmin = ({newsItems}) => {

    const removeElement = (id) => {
        const element = document.getElementById("news-tr-" + id);
        element.parentNode.removeChild(element)
    };

    const onDeleteButton = (id) => {
        removeElement(id);
        fetch(
            'http://localhost:3001/blog',
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id})
            }
        )

    };


    if (!newsItems){
        return (<p>Loading...</p>)
    }

    return (
        <div>
            <p>Aktualne wpisy:</p>
            <br/>
            <table id={"news-table-admin"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tytuł</th>
                    <th>Autor</th>
                    <th>Działania</th>
                </tr>
                </thead>

                <tbody>

                {
                    newsItems.map((item) =>
                        <tr key={item.id} id={"news-tr-"+ item.id}>
                            <td>{item.id}</td>
                            <td>{item.header}</td>
                            <td>{item.author}</td>
                            <td>
                                {
                                    //todo: napisać komponet wyświetlający artykuł do edycji
                                }
                                <button>Edytuj</button>
                                <button onClick={() => onDeleteButton(item.id)}>Usuń</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>
            <br/>




            </div>
    )};

ViewNewsForAdmin.propTypes = {
    newsItems: PropTypes.array
};

ViewNewsForAdmin.defaultProps = {
    newsItems: []
};


export default ViewNewsForAdmin;
