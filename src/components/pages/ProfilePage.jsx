import React, {useState, useEffect} from "react";
import "./ProfilePage.scss";
import ViewPets from "../ViewPets";
import ViewUserData from "../ViewUserData";
import Api from "../../api/api";

const api = new Api();

const ProfilePage = () => {

    const [allPets, setAllPets] = useState([]);
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        api.getUserPets(userData).then(response => setAllPets(response));
        api.user().then(response => setUserData(response));

    }, []);


    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <ViewUserData userInfo={userData}/>
            </div>
            <div>
                <ViewPets userPets={allPets} userInfo={userData}/>

            </div>
        </div>
    )

};

export default ProfilePage;