import React, {useState, useEffect} from "react";
import ViewPets from "../../components/ViewPets/ViewPets";
import ViewUserData from "../../components/ViewUserData/ViewUserData";
import Api from "../../api/api";
import style from "./ProfilePage.module.scss";

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
        <div className={style.wrap}>
            <div className={style.flex}>
                <ViewUserData userInfo={userData}/>
            </div>
            <div className={style.flex}>
                <ViewPets userPets={allPets} userInfo={userData}/>

            </div>
        </div>
    )

};

export default ProfilePage;