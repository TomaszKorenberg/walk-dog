import "./WalksPage.scss";
import React, {useState, useEffect} from "react";
import {getToken} from "../../utils/token";
import ViewWalks from "../ViewWalks";
import Api from "../../api/api";

const api = new Api();

const WalksPage = () => {

    const [place, setPlace] = useState(null);
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);
    const [dogName, setDogName] = useState(null);
    const [description, setDescription] = useState(null);
    const [allWalks, setAllWalks] = useState(null);

    const onPlaceChange = ({target: {value}}) => setPlace(value);
    const onDateChange = ({target: {value}}) => setDate(value);
    const onHourChange = ({target: {value}}) => setHour(value);
    const onDogNameChange = ({target: {value}}) => setDogName(value);
    const onDescriptionChange = ({target: {value}}) => setDescription(value);


    /**
     * Get walks and send to ViewWalks component
     */
    useEffect(() => {
        api.walks().then((response) => setAllWalks(response));
    }, []);

    /**
     * Add new walk
     */

    const onSubmit = (e) => {
        e.preventDefault();

        api.insertWalk(place, date, hour, dogName, description)
            .then((response) => response.json).then(() => {
            window.location.href = "/walks";
        });
    };


    return (
        <div className={"container"}>
            <ViewWalks walkItems={allWalks}/>


            <p>Jeśli chcesz dodac swój spacer wypełnij poniższe pola</p>
            <fieldset>
                <form>
                    <label htmlFor="dog_name_field">Dog name</label>
                    <input type="text" id="dog_name" name="dog_name" onChange={onDogNameChange}/>
                    <label htmlFor="date_field">Date of walk</label>
                    <input type="text" name="date" onChange={onDateChange}/>
                    <label htmlFor="hour_field">Hour of walk</label>
                    <input type="text" name="hour" onChange={onHourChange}/>
                    <label htmlFor="place_field">Place of walk</label>
                    <input type="text" name="place" onChange={onPlaceChange}/>
                    <label htmlFor="Description">Description of walk</label>
                    <input type="text" name="description" onChange={onDescriptionChange}/>
                    <button onClick={onSubmit}>Zapisz</button>
                </form>
            </fieldset>
        </div>)
};

export default WalksPage;
