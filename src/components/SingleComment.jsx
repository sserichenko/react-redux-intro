import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { commentUpdate, commentRemove } from '../redux/actions';

const SingleComment = ({data}) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    const {comment, id} = data;
    useEffect(() => {
        if(comment){
            setCommentText(comment)
        }
    }, [comment])

    const handleInputChange = (e) => {
        setCommentText(e.target.value);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(commentRemove(id))
    }
    
    return (
        <form className="comments-item" onSubmit={handleUpdate}>
            <div onClick={handleRemove}className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInputChange}/>
            <input type="submit" hidden />
        </form>
    );
};

export default SingleComment;