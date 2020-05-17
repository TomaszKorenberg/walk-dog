import React, {useState} from "react";
import style from "./ViewUserData.module.scss";


const ViewUserData = ({userInfo}) => {

    const [passForm, setPassForm] = useState(false);
    const showPasswordForm = () => {passForm === false ? setPassForm(true): setPassForm(false)};


    const saveChanges = () => {
        console.log('asd');
    };

    return (
        <>
        
            <h3>Emai użytkownika: {userInfo.user}</h3>
            <h3>Nickname: {userInfo.nickname}</h3>
       
            {
                //todo: wysłać zapytanie do bazy o dane użytkownika i wyswietlic je w tym komponencie
            }
        <input className={style.input} type="text" disabled placeholder="email"/>
        <input className={style.input} type="text" placeholder="imię"/>
        <input className={style.input} type="text" placeholder="nazwisko"/>
        
        <div className = {style.flex}>
            <button className={style.button}>Edytuj dane</button>
            <button className={style.button} onClick={showPasswordForm} >Zmień hasło</button>
        </div>
       
        {
        passForm === false ? null : 
        <div>
            <input className={style.input} type="text" placeholder="obecne hasło"/>
            <input className={style.input} type="text" placeholder="nowe hasło"/>
            <button className={style.button}>Zapisz zmiany</button>
        </div>
        }
        </>
    )
};

export default ViewUserData;