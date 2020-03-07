import React, {useState, useEffect} from "react";
import "./ProfilePage.scss";
import PetsView from "./PetsView";
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
      getPets().then((response) => setAllPets(response.rows));
      getUserData().then((response)=> setUserData(response.rows));
    }, []);


    
    return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <div>
            <ViewUserData userData={userData}/>
        </div>
        <div>  
            <PetsView userPets={allPets}/>
        </div>
    </div>
    )

};

export default ProfilePage;