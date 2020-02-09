import "./WalksPage.scss";
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";



const WalksPage = () => (
    <div className = {"container"}>

    


        <p>Jeśli chcesz dodac swój spacer wypełnij poniższe pola</p>
        <fieldset>
                <form action="">
                    <label htmlFor="dog_name_field">Dog name</label>  
                    <input type="text" id="dog_name" name="dog_name"/>                   
                    <label htmlFor="date_field">Date of walk</label>  
                    <input type="text" name="date"/> 
                    <label htmlFor="hour_field">Hour of walk</label>  
                    <input type="text" name="hour"/>        
                    <label htmlFor="place_field">Place of walk</label>  
                    <input type="text" name="place"/>                       
                    <button>Zapisz</button>
                </form>
        </fieldset>
    </div>
);

export default WalksPage;
