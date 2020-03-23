import React, {useState} from "react";
import Api from "../../api/api";

const api = new Api();

const WriteComment = ({walkId, user}) => {
    const onCommentChange = ({target: {value}}) => setComment(value);
    const [comment, setComment] = useState(null);


    const actualDate = () => {

        const newDate = new Date();
        const date = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const hour = newDate.getHours();
        const minutes = newDate.getMinutes();
        const seconds = newDate.getSeconds();

        return date + "." + month + "." + year + "r. " + hour + ":" + minutes + ":" + seconds
    };



    const commentData = {
        "nickname": user.nickname,
        "walkid": walkId,
        "comment":comment,
        "date": actualDate()

    };

    const onSubmit = (e) => {
        e.preventDefault();

        api.insertComment(commentData);

        //todo: napisać funkcję dodającą komentarz na końcu bez potrzeby przeładowania strony
        window.location.reload();

    };


    return (
        <div>

            <form onSubmit={onSubmit}>


                <div>
            <textarea
                onChange={onCommentChange}
                placeholder="Treśc komentarza"
                rows="5"
            />
                </div>


                <div>
                    <button>
                        Wyślij
                    </button>
                </div>
            </form>


        </div>
    )
};

export default WriteComment;

