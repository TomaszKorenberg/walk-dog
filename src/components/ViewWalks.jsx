import React from "react";
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
                            <td>{item.place}</td>
                            <td>{item.date}</td>
                            <td>{item.hour}</td>
                            <td>{item.dogname}</td>
                            <td>{item.description}</td>
                        </tr>)
                }
                </tbody>
            </table>
            <br/>
        </div>
    )
};

//todo: dopisać komponet że po kliknięciu na konkretny spacer przejdziemy do nowej strony gdzie będą informacje o tym spacerze
//todo: dopisać komponent forum/czatu w spacerze aby ludzie mogli do siebie pisać




ViewWalks.propTypes = {
    walkItems: PropTypes.array
};

ViewWalks.defaultProps = {
    walkItems: []
};


export default ViewWalks;
