import React, {useState} from "react";
import {getToken} from "../utils/token";

const ViewPets = ({userPets, userInfo}) => {


    //fixme: Po dodaniu pieska strona musi się wyrenderować ponownie komponent by wyświetlić pieska

    //fixme: Po dodaniu pieska wywala "Uncaught (in promise) SyntaxError: Unexpected end of JSON input
    //     at ViewPets.jsx:25"

    const [dogForm, setDogForm] = useState(false);
    const showAddDog = () => {
        dogForm === false ? setDogForm(true) : setDogForm(false);
    };

    const [dogName, setDogName] = useState(null);
    const [race, setRace] = useState(null);
    const [size, setSize] = useState(null);
    const [age, setAge] = useState(null);

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
                body: JSON.stringify({dogName, race, size, age, userInfo})
            }
        ).then((response) => response.json()).then(() => {
            window.location.href = "./profile";
        })
    };

    return (
        <div>
            <p>Moje psy:</p>
            <table>
                <thead>
                <tr>
                    <th>Psiak</th>
                    <th>Działania</th>
                </tr>
                </thead>
                <tbody>
                {userPets.map((item) =>
                    <tr key={item.id}>
                        <td>
                            {item.dog_name}
                        </td>
                        <td>
                            {
                                //todo: zrobić komponent do edytowania psiaka
                            }
                            <button>Edytuj</button>
                            {
                                //todo: obsługę usuwania psiaka
                            }
                            <button>Usuń</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button onClick={showAddDog}>Dodaj psa</button>
            {
                dogForm === false ? null :
                    <div>
                        <input
                            style={{display: 'flex'}}
                            type="text"
                            placeholder="imie psa"
                            name="dogName"
                            id="dogName"
                            onChange={onDogNameChange}
                        />
                        <input
                            style={{display: 'flex'}}
                            type="text"
                            placeholder="rasa"
                            name="race"
                            id="race"
                            onChange={onRaceChange}
                        />
                        <input
                            style={{display: 'flex'}}
                            type="text"
                            placeholder="rozmiar"
                            name="size"
                            id="size"
                            onChange={onSizeChange}
                        />
                        <input
                            style={{display: 'flex'}}
                            type="text"
                            placeholder="wiek"
                            name="age"
                            id="age"
                            onChange={onAgeChange}
                        />
                        <button
                            onClick={submitDog}
                            style={{display: 'flex'}}
                        >Zapisz psa
                        </button>
                    </div>
            }
        </div>
    )

}

export default ViewPets