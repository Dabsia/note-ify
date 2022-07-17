import { ActionTypes } from "./ActionTypes";

export const toggle_modal = () => ({
    type: ActionTypes.TOGGLE_MODAL
})

export const add_Course = (materialURL) => ({
    type: ActionTypes.ADD_COURSE,
    payload : materialURL
    
})

export const delete_course = (idx) => ({
    type: ActionTypes.DELETE_COURSE,
    payload: idx
})

export const filter_courses = (level) => ({
    type: ActionTypes.FILTER_COURSES,
    payload: level
})

export const create_new_user = (user) => ({
    type: ActionTypes.CREATE_NEW_USER,
    payload: user
})

export const logout = () => ({
    type: ActionTypes.LOGOUT
})