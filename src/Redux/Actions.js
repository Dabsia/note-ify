import { ActionTypes } from "./ActionTypes";

export const toggle_modal = () => ({
    type: ActionTypes.TOGGLE_MODAL
})

export const add_Course = (materialURL) => ({
    type: ActionTypes.ADD_COURSE,
    payload : materialURL
    
})