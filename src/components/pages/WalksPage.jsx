import "./WalksPage.scss";
import React, {useState} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

const WalksPage = () => {

    const [place, setPlace] = useState(null);
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);
    const [dogName, setDogName] = useState(null);
    const [description, setDescription] = useState(null);

    const onPlaceChange = ({target: {value}}) => setPlace(value);
    const onDateChange = ({target: {value}}) => setDate(value);
    const onHourChange = ({target: {value}}) => setHour(value);
    const onDogNameChange = ({target: {value}}) => setDogName(value);
    const onDescriptionChange = ({target: {value}}) => setDescription(value);




    const onSubmit = (e) => {
    e.preventDefault();

    fetch(
        'http://localhost:3001/walks',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({place, date, hour, dogName, description})
            //todo dodac user id do zapytania db oraz do
        }
    ).then((response) => response.json()).then((walks) => {
        window.location.href = "/walks";
    });
};


    return  (<div className = {"container"}>
        <p>Jeśli chcesz dodac swój spacer wypełnij poniższe pola</p>
        <fieldset>
                <form>
                    <label htmlFor="dog_name_field">Dog name</label>
                    <input type="text" id="dog_name" name="dog_name" type="text" onChange={onDogNameChange}/>
                    <label htmlFor="date_field">Date of walk</label>  
                    <input type="text" name="date" type="text" onChange={onDateChange}/>
                    <label htmlFor="hour_field">Hour of walk</label>  
                    <input type="text" name="hour" type="text" onChange={onHourChange}/>
                    <label htmlFor="place_field">Place of walk</label>  
                    <input type="text" name="place" type="text" onChange={onPlaceChange}/>
                    <label htmlFor="Description">Description of walk</label>
                    <input type="text" name="description" type="text" onChange={onDescriptionChange}/>
                    <button onClick={onSubmit}>Zapisz</button>
                </form>
        </fieldset>
    </div>)
};

export default WalksPage;
