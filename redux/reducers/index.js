import { SET_DARK_THEME, SET_BREEDS, SET_FILTER } from '../actionTypes'

const initialState = {
  darkTheme: false,
  breeds: [],
  filter: ''
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

    case SET_FILTER:
      const { filter } = action.payload;
      return {
        ...state,
        filter: filter
      }

    default: return state;
  }
}