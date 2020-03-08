import React from "react";

const Unauthorized  = ({name}) => {
    return (
        <div className={"unauthorized-container"}>
            <img src="https://cdn.pixabay.com/photo/2016/12/18/12/49/cyber-security-1915628_1280.png" alt="401-code"/>
                <h1>401</h1>
                <h2>Brak uprawnień {name.value ? name : " "}</h2>
        </div>

    )
};

export default Unauthorized;