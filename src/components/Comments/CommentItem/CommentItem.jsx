import React from "react";

const CommentItem = ({comment}) => {

    if(!comment){
        return "Ładuję..."
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
                src={`https://api.adorable.io/avatars/48/${comment.nickname.toString().toLowerCase()}@adorable.io.png`}
                alt={comment.nickname}
            />

            <div>
                <small>{comment.comment_date}</small>
                <h6>Nazwa użytkownika: {comment.nickname}</h6>
                {comment.comment}
            </div>
            <hr/>
            <br/>
        </div>
    )
};

export default CommentItem;

