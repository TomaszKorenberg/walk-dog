import React, {useState} from "react";
import Api from "../../api/api";
import style from "./ViewPets.module.scss";

const api = new Api();


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
        api.insertPet(dogName, race, size, age, userInfo).then(() => {window.location.href = "./profile";})
    };

    return (
        <div className={style.flex}>   
            <h3>Moje psy:</h3>
            <button className = {style.button} onClick={showAddDog}>Dodaj psa</button>            
            <table className={style.table} >
                <thead >
                <tr className = {style.tableHead}>
                    <th>Psiak</th>
                    <th>Rasa</th>
                    <th>Wiek</th>
                    <th>Rozmiar</th>  
                    <th></th>                 
                 </tr>
                </thead>
                <tbody >
                {userPets.map((item) =>
                    <tr key={item.id} className ={style.tBody}>
                        <td>
                            {item.dog_name}
                        </td>
                        <td>
                            {item.race}
                        </td>
                        <td>
                            {item.age}
                        </td>
                        <td>
                            {item.size}
                        </td>
                        <td>
                            {
                                //todo: zrobić komponent do edytowania psiaka
                            }
                            <button className = {style.buttonTable}>Edytuj</button>
                            {
                                //todo: obsługę usuwania psiaka
                            }
                            <button className = {style.buttonTable}>Usuń</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
           
            {
                dogForm === false ? null :
                    <div className={style.flex}>
                        <input
                            className={style.input}
                            type="text"
                            placeholder="imię psa"
                            name="dogName"
                            id="dogName"
                            onChange={onDogNameChange}
                        />
                        <input
                            className={style.input}
                            type="text"
                            placeholder="rasa"
                            name="race"
                            id="race"
                            onChange={onRaceChange}
                        />
                        <input
                            className={style.input}
                            type="text"
                            placeholder="rozmiar"
                            name="size"
                            id="size"
                            onChange={onSizeChange}
                        />
                        <input
                            className={style.input}
                            type="text"
                            placeholder="wiek"
                            name="age"
                            id="age"
                            onChange={onAgeChange}
                        />
                        <button 
                            className={style.button}
                            onClick={submitDog}
                        >Zapisz psa
                        </button>
                    </div>
            }
        </div>
    )

}

export default ViewPets