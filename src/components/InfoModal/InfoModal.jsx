import React from "react";
import "./infoModal.scss"


const InfoModal = (tittle, information, buttonText, link) => {
    const removeModal = () => {
        const modal = document.getElementById("info-modal");
        modal.remove()
    };

    return (


        <div id={"info-modal"}>
            <h1>{tittle}</h1>
            <p>{information}</p>
            <button><a href={link}>{buttonText}</a></button>
            <button onClick={removeModal}>Zamknij</button>
        </div>
    )

}

export default InfoModal
