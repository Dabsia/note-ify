import { countTypes } from "./actionTypes"

export const increment = (number) => ({
  type: countTypes.INCREMENT,
  payload: number
    
})

export const decrement = () => ({
  type: countTypes.DECREMENT
})

export const signIn = () => ({
  type: countTypes.SIGN_IN
})

export const setTypedValue = (text) => ({
  type: countTypes.TYPED_VALUE,
  payload: text
})

