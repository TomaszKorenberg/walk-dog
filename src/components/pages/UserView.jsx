import React, {useState} from "react";


const UserView = ({userData}) => {

    const [passForm, setPassForm] = useState(false);
    const showPasswordForm = () => {passForm === false ? setPassForm(true): setPassForm(false);}

    const saveChanges = () => {
        console.log('asd');
    }

    return (
        <>
        <p>Moje dane:</p>
        <input style={{display:'flex'}} type="text" disabled placeholder="email"/>
        <input style={{display:'flex'}} type="text" placeholder="imie"/>
        <input style={{display:'flex'}} type="text" placeholder="nazwisko"/>
        <button onClick={saveChanges}>Edytuj dane</button>
        <button style={{display:'flex'}} onClick={showPasswordForm} >Zmień hasło</button>
        {
        passForm === false ? null : 
        <div>
            <input style={{display:'flex'}} type="text" placeholder="obecne hasło"/>
            <input style={{display:'flex'}} type="text" placeholder="nowe hasło"/>
            <button style={{display:'flex'}}>Zapisz zmiany</button>
        </div>
        }
        </>
    )
}

export default UserView;