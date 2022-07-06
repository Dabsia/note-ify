import { ActionTypes } from "./ActionTypes";

export const toggle_modal = () => ({
    type: ActionTypes.TOGGLE_MODAL
})

export const add_Course = (materialURL) => ({
    type: ActionTypes.ADD_COURSE,
    payload : materialURL
    
})

export const delete_course = (material) => ({
    type: ActionTypes.DELETE_COURSE,
    payload: material
})

export const filter_courses = (level) => ({
    type: ActionTypes.FILTER_COURSES,
    payload: level
})