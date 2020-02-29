import React from "react";
import PropTypes from "prop-types";




const ViewWalks = ({walkItems}) => (


    <div>
        <p>Spacery:</p>
        {console.log(walkItems)}

        <ul>
            {
                //walkItems.map((item) => <li>{item}</li>)
            }
        </ul>
    </div>
);

ViewWalks.propTypes = {
    walkItems: PropTypes.array
};

ViewWalks.defaultProps = {
    walkItems: []
};


export default ViewWalks;