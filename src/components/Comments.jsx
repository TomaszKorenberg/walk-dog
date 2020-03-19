import React, {useState, useEffect} from "react";
import Api from "../api/api";

const api = new Api();


const Comments = () => {



    // const tempData = {
    //     userid:92,
    //     walkid: 1,
    //     comment:"Treść komentarza",
    //     date:"19.03.2020r."
    // };
    //api.insertComment(tempData);

    //fixme: naprawić błąd - dlaczego jest undefined?
    //api.getCommentsByWalkId(1).then(response => console.log(response))

    const state = {
        comments: [],
        loading: false
    };
    if(state.loading){
        return "Loading..."
    }

    return (


        <div>
            <hr/>

            <div>
                <h2>
                    Skomentuj spacer <span>💬</span>
                </h2>


                <div>
                    <div>
                        <h6>Napisz komentarz</h6>
                        {/* Comment Form Component */}
                    </div>
                    <div>


                        {/* Comment List Component */}


                    </div>
                </div>
            </div>
        </div>
    )
};

export default Comments;

