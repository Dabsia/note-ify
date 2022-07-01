import { ActionTypes } from "./ActionTypes";

const initialState = {
    toggle_modal: false,
    materials : []
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
        
        default:
            return state
    }
}

export default reducer