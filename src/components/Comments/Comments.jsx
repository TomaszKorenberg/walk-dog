import React, {useEffect, useState} from "react";
import ViewComments from "./ViewComments";
import WriteComment from "./WriteComment";
import Api from "../../api/api";

const api = new Api();


const Comments = ({walkId, user}) => {

    const [comments, setComments] = useState(null);

    useEffect(() => {
        api.getCommentsByWalkId(walkId).then(response => setComments(response));
    }, []);

    console.log(comments)
    if (!comments) {
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

                        <WriteComment walkId={walkId} user={user}/>

                    </div>
                    <div>

                        <ViewComments comments={comments}/>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Comments;

