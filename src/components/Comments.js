import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentCreate, commentsLoad} from "../redux/actions";
import uniqid from 'uniqid';
import SingleComment from "./SingleComment";

const Comments = () => {
    const dispatch = useDispatch()
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => state.commentReducer.comments)
    const changeCommentHandler = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment('');
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, [dispatch])

    return (
        <div className="card-comments">
            <form className="comments-item-create" onSubmit={handleSubmit}>
                <input type="text" value={textComment} onChange={changeCommentHandler} placeholder="Enter new comment..." />
                <input type="submit" hidden />
            </form>
            {
                !!comments && comments.map((comment, index) => <SingleComment key={comment.id + '-' + index} data={comment}/>)
            }
            
        </div>
    );
};

export default Comments;