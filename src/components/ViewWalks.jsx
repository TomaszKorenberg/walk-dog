import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./ViewWalks.scss";


const ViewWalks = ({walkItems}) => {


    if (!walkItems) {
        return (<p>Loading...</p>)
    }

    return (


        <div>
            <p>Aktualne spacery:</p>
            <br/>
            <table id={"walks-table"}>
                <thead>
                <tr>
                    <th>Miejsce</th>
                    <th>Data</th>
                    <th>Godzina</th>
                    <th>Imię psa</th>
                    <th>Opis</th>
                </tr>
                </thead>
                <tbody>

                {
                    walkItems.map((item) =>

                            <tr key={item.id}>
                                <td>
                                    <a href={"./walks/" + item.id}>{item.place}</a>
                                </td>
                                <td>
                                    <a href={"./walks/" + item.id}>{item.date}</a>
                                </td>
                                <td>
                                    <a href={"./walks/" + item.id}>{item.hour}</a>
                                </td>
                                <td>
                                    <a href={"./walks/" + item.id}>{item.dogname}</a>
                                </td>
                                <td>
                                    <a href={"./walks/" + item.id}>{item.description}</a>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
            <br/>
        </div>
    )
};



ViewWalks.propTypes = {
    walkItems: PropTypes.array
};

ViewWalks.defaultProps = {
    walkItems: []
};


export default ViewWalks;
