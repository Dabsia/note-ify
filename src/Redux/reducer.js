import { ActionTypes } from "./ActionTypes";

const initialState = {
    toggle_modal: false,
    materials: [],
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MODAL:
            return {
                ...state, toggle_modal: !state.toggle_modal
            }
        case ActionTypes.ADD_COURSE: 
            return {
                ...state, materials: [...state.materials, action.payload]
            }
        case ActionTypes.CREATE_NEW_USER:
            return {
                ...state, user: action.payload
            }
        // case ActionTypes.FILTER_COURSES:
        //     return {
        //         ...state, materials: [...state.materials, state.materials.includes(action.payload)]
        //     }
        // case ActionTypes.DELETE_COURSE:
        //     return {
        //         ...state, materials: [state.materials.filter(id => id !== action.payload)]
        //     }
        default:
            return state
    }
}

export default reducer