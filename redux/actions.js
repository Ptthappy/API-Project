import { SET_DARK_THEME, SET_BREEDS } from './actionTypes';

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
