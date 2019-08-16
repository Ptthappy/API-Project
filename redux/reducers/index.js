import { SET_DARK_THEME, SET_BREEDS } from '../actionTypes'

const initialState = {
  darkTheme: false,
  breeds: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_BREEDS:
      const { breeds } = action.payload;
      return {
        ...state,
        breeds: breeds
      }

    case SET_DARK_THEME:
      const { darkTheme } = action.payload;
      return {
        ...state,
        darkTheme: darkTheme
      }

    default: return state;
  }
}