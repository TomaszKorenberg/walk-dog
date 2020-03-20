import React, {useEffect, useState} from "react";
import ViewComments from "./ViewComments";
import WriteComment from "./WriteComment";
import Api from "../../api/api";

const api = new Api();


const Comments = ({walkId}) => {

    const [comments, setComments] = useState(null);


    useEffect(() => {
        api.getCommentsByWalkId(walkId).then(response => setComments(response));
    }, []);


    const state = {
        comments: [],
        loading: false
    };



    if (state.loading) {
        return "Loading..."
    }

    return (


        <div>
            <hr/>

            <div>
                <h2>
                    Skomentuj spacer:
                </h2>


                <div>
                    <div>

                        <WriteComment/>

                    </div>
                    <div>

                        <ViewComments comments={comments} state={state}/>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Comments;

