import React, {useState} from "react";
import "./ProfilePage.scss";
import {getToken} from "../../utils/token";


const ProfilePage = () => {

    const [dogForm, setDogForm] = useState(false);
    const showAddDog = () => {dogForm === false ? setDogForm(true): setDogForm(false);}
    const [passForm, setPassForm] = useState(false);
    const showPasswordForm = () => {passForm === false ? setPassForm(true): setPassForm(false);}

    /*
    Pobrać dane i wypełnić pola
    */

    const [dogName,setDogName] = useState(null);
    const [race,setRace] = useState(null);
    const [size,setSize] = useState(null);
    const [age,setAge] = useState(null);

    const onDogNameChange = ({target: {value}}) => setDogName(value);
    const onRaceChange = ({target: {value}}) => setRace(value);
    const onSizeChange = ({target: {value}}) => setSize(value);
    const onAgeChange = ({target: {value}}) => setAge(value);

    const submitDog = () => {
        fetch(
            'http://localhost:3001/pets',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': getToken()
                },
                body: JSON.stringify({dogName, race, size, age})
            }
        ).then((response) => response.json()).then(() => {
            window.location.href="./profile";
        })     
    };




    const saveChanges = () => console.log('klikłem');

    
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <div>
            <p>Moje dane:</p>
            <input style={{display:'flex'}} value="email" type="text" disabled/>
            <input style={{display:'flex'}} value="imie" type="text"/>
            <input style={{display:'flex'}} value="nazwisko" type="text"/>
            <button onClick={saveChanges}>Edytuj dane</button>
            <button style={{display:'flex'}} onClick={showPasswordForm} >Zmień hasło</button>
            {
            passForm === false ? null : 
            <div>
                <input style={{display:'flex'}} type="text" placeholder="obecne hasło"/>
                <input style={{display:'flex'}} type="text" placeholder="nowe hasło"/>
                <button style={{display:'flex'}}>Zmień hasło</button>
            </div>
            }
        </div>
        <div>  
            <p>Moje psy:</p>
            <button onClick={showAddDog}>Dodaj psa</button>
            {
            dogForm === false ? null : 
            <div>
                <input 
                    style={{display:'flex'}} 
                    type="text" 
                    placeholder="imie psa"
                    name="dogName"
                    id="dogName"
                    onChange={onDogNameChange}
                />
                <input 
                    style={{display:'flex'}} 
                    type="text" 
                    placeholder="rasa"
                    name="race"
                    id="race"
                    onChange={onRaceChange}
                />
                <input 
                    style={{display:'flex'}} 
                    type="text" 
                    placeholder="rozmiar"
                    name="size"
                    id="size"
                    onChange={onSizeChange}
                />
                <input 
                    style={{display:'flex'}} 
                    type="text" 
                    placeholder="wiek"
                    name="age"
                    id="age"
                    onChange={onAgeChange}
                />
                <button 
                    onClick={submitDog}
                    style={{display:'flex'}}
                    >Zapisz psa
                </button>
            </div>
            }
        </div>
    </div>
    )

};

export default ProfilePage;