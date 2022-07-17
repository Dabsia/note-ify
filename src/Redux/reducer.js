import { ActionTypes } from "./ActionTypes";

const initialState = {
    toggle_modal: false,
    books: [],
    user: null,
    isLoggedIn: false,
    filteredBooks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MODAL:
            return {
                ...state, toggle_modal: !state.toggle_modal
            }
        case ActionTypes.ADD_COURSE: 
            return {
                ...state, books: [...state.books, action.payload]
            }
        case ActionTypes.CREATE_NEW_USER:
            return {
                ...state, user: action.payload, isLoggedIn: true
            }
        case ActionTypes.LOGOUT:
            return {
                ...state, user: null, isLoggedIn: false
            }
        case ActionTypes.FILTER_COURSES:
            return {
                ...state, filteredBooks: state.books.filter((book) => {
                   return book.materialLevel === action.payload
                })
            }
        case ActionTypes.DELETE_COURSE:
            return {
                ...state, books: state.books.filter(book => book.idx !== action.payload)
            }
        default:
            return state
    }
}

export default reducer