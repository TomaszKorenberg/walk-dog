import React from "react";
import Comment from "./Comment";



const ViewComments = ({comments, state}) => {

    console.log(comments);

    if(!comments){
        return "Loading..."
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
                comments.length === 0 && !state.loading ? (
                <div>
                    Napisz pierwszy komentarz
                </div>
            ) : null
            }

            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    )
};

export default ViewComments;

