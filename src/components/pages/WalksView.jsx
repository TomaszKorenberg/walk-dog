import React from "react";
import PropTypes from "prop-types";




const ViewWalks = ({walkItems}) => {
    if (!walkItems){
        return (<p>Loading...</p>)
    }

    return (
//todo: zrobić key bo wywala błąd w konsoli

    <div>
        <p>Spacery:</p>
        {console.log(walkItems)}

        <ul>

            {
                walkItems.map((item) => <li>{item.id} {item.place}{item.date}{item.hour} {item.dogname} {item.description} {item.user_id}</li>)
            }
        </ul>
    </div>
)};

ViewWalks.propTypes = {
    walkItems: PropTypes.array
};

ViewWalks.defaultProps = {
    walkItems: []
};


export default ViewWalks;
