import {COMMENT_CREATE, COMMENT_UPDATE, COMMENT_REMOVE, COMMENTS_LOAD} from "./types"

const initialState = {
    comments: []
}
export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_UPDATE:
            const {data} = action;
            const {comments} = state;
            const itemIndex = comments.findIndex(res => res.id === data.id)
            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1)
            ]
        return {
            ...state,
            comments: nextComments
        }
        case COMMENT_REMOVE:
            const updatedComments = state.comments.filter(res => res.id !== action.id)
            return {
                ...state,
                comments: updatedComments
            }
        case COMMENTS_LOAD:
            const commentsNew = action.data.map(res => {
                return {
                    id: res.id,
                    comment: res.name}
            })
        return {
            ...state,
            comments: commentsNew
        }
        default:
            return state
    }

}