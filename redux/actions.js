import { SET_DARK_THEME, SET_BREEDS, SET_FILTER, REMOVE_FILTER } from './actionTypes';

export const setDarktheme = (darkTheme) => ({
  type: SET_DARK_THEME,
  payload: {
    darktheme
  }
})

export const setBreeds = (breeds) => ({
  type: SET_BREEDS,
  payload: {
    breeds
  }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter
  }
})