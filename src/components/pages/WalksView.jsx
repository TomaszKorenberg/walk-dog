import React from "react";



const ViewWalks = ({walkItems}) => (


    <div>
        {console.log(walkItems)}
        <p>Spacery:</p>

        <ul className="to-do-list">
            {
                //walkItems.map((item) => (<li key={item.id}>{item}</li>))
            }
        </ul>
    </div>
);


export default ViewWalks;