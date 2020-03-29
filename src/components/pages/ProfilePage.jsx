import React, {useState, useEffect, useContext} from "react";
import "./ProfilePage.scss";
import ViewPets from "../ViewPets";
import ViewUserData from "../ViewUserData";
import Api from "../../api/api";

const api = new Api();

const ProfilePage = () => {




    const [allPets, setAllPets] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        api.getUserPets(userData).then(response => setAllPets(response));
        api.user().then(response => setUserData(response));

    }, []);

    if (!allPets || !userData){
        return "Loading..."
    }

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