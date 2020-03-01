import React from "react";
import "./infoModal.scss"
const InfoModal = (tittle, information, buttonText, link) => {


    return (
        <div id={"infoModal"}>
            <h1>{tittle}</h1>
            <p>{information}</p>
            <button><a href={link}>{buttonText}</a></button>
        </div>
    )

}

export default InfoModal
