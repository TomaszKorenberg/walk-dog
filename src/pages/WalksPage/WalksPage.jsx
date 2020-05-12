import React, {useState, useEffect} from "react";
import ViewWalks from "../../components/ViewWalks/ViewWalks";
import Api from "../../api/api";
import styles from "./WalksPage.module.scss";

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
        <div className={"container", styles.wrap}>
            <div className={styles.margin}>
                <ViewWalks walkItems={allWalks}/>
            </div>

        <div className={styles.margin}>
            <p className={styles.margin} > Jeśli chcesz dodac swój spacer wypełnij poniższe pola:</p>
            <fieldset className={styles.fieldset} >
                <form>
                    <label className={styles.label} htmlFor="dog_name_field">Imę psa</label>
                    <input className={styles.input} type="text" id="dog_name" name="dog_name" onChange={onDogNameChange}/>
                    <label className={styles.label}  htmlFor="date_field">Data spaceru</label>
                    <input className={styles.input} type="text" name="date" onChange={onDateChange}/>
                    <label className={styles.label}  htmlFor="hour_field">Godzina spaceru</label>
                    <input className={styles.input} type="text" name="hour" onChange={onHourChange}/>
                    <label className={styles.label}  htmlFor="place_field">Miejsce spaceru</label>
                    <input className={styles.input} type="text" name="place" onChange={onPlaceChange}/>
                    <label className={styles.label}  htmlFor="Description">Dodatkowe info</label>
                    <input className={styles.input} type="text" name="description" onChange={onDescriptionChange}/>
                    <button className={styles.button} onClick={onSubmit}>Zapisz</button>
                </form>
            </fieldset>
        </div>
        </div>
    )
};

export default WalksPage;
