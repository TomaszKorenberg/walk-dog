import React, {useState, useEffect} from "react";
import "./ProfilePage.scss";
import ViewPets from "../ViewPets";
import {getToken} from "./../../utils/token";
import ViewUserData from "../ViewUserData";


const ProfilePage = () => {

    const [allPets, setAllPets] = useState([]);
    const [userData, setUserData] = useState([]);

    const getUserData = () => {
        return fetch('http://localhost:3001/user', {headers: {'Token': getToken()}})
          .then(response =>  response.json())
    };

    const getPets = () => {
        return fetch('http://localhost:3001/pets', {headers: {'Token': getToken()}})
          .then(response =>  response.json())

    };
  
    useEffect(() => {
      getPets().then(response => setAllPets(response));
      getUserData().then(response => setUserData(response));

    }, []);


    return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <div>
            <ViewUserData userInfo={userData}/>
        </div>
        <div>
            {
                //fixme: naprawić komponent ViewPets aby wywietlał pieski konkretnego użytkownika

                //<ViewPets userPets={allPets}/>
            }
        </div>
    </div>
    )

};

export default ProfilePage;