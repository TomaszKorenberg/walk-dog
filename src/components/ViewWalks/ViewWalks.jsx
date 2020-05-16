import React from "react";
import PropTypes from "prop-types";
import styles from "./ViewWalks.module.scss";


const ViewWalks = ({walkItems}) => {


    if (!walkItems) {
        return (<p>Ładuję...</p>)
    }

    return (


        <div className = {styles.margin}>
            <h3 className = {styles.h3}>Aktualne spacery:</h3>
            
            <table id={"walks-table"} className = {styles.table}>
                <thead>
                <tr className = {styles.tableHead}>
                    <th >Miejsce</th>
                    <th>Data</th>
                    <th>Godzina</th>
                    <th>Imię psa</th>
                    <th>Opis</th>
                </tr>
                </thead>
                <tbody>

                {
                    walkItems.map((item) =>

                            <tr key={item.id} className = {styles.tableLine}>
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
