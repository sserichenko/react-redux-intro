import {LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF} from "./types"

const initialState = {
    isLoading: false,
    error: null
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state,
                isLoading: true
            }
        case LOADER_DISPLAY_OFF:
        return {
            ...state,
            isLoading: false
        }
        case ERROR_DISPLAY_ON:
        return {
            ...state,
            error: action.text
        }
        case ERROR_DISPLAY_OFF:
        return {
            ...state,
            error: null
        }
        default:
            return state
    }

}