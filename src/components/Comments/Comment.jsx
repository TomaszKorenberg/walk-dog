import React from "react";

const Comment = ({comment}) => {

    if(!comment){
        return "Loading..."
    }

    return (
        <div>
            {
                //todo: tu się ma wyświetlać awatar w przyszłości wgrany na profilu
                //fixme: zmienić aby zamiast user_id była nazwa uzytkownika (dodać w backendzie)
            }
            <img
                width="48"
                height="48"
                src={`https://api.adorable.io/avatars/48/${comment.user_id}@adorable.io.png`}
                alt={comment.user_id}
            />

            <div>
                <small>{comment.comment_date}</small>
                <h6>Nazwa użytkownika: {comment.user_id}</h6>
                {comment.comment}
            </div>
            <hr/>
            <br/>
        </div>
    )
};

export default Comment;

