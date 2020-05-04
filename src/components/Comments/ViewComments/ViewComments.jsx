import React from "react";
import CommentItem from "../CommentItem/CommentItem";



const ViewComments = ({comments}) => {

    if(!comments){
        return "Ładuję..."
    }

    return (
        <div>

            <h5>
                <span>{comments.length}</span>{" "}
                {
                    //fixme: dodać warunek aby wyswietlało poprawnie 0 komentarzY, 1 komnetarz, 3 komentarzE,
                }

                Komentarz{comments.length === 1 ? "" : "y"}
            </h5>

            {
                comments.length === 0 && comments ? (
                <div>
                    Napisz pierwszy komentarz
                </div>
            ) : null
            }

            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </div>
    )
};

export default ViewComments;

