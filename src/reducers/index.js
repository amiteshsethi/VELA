import { ADD_MOVIES, ADD_FAVOURITE ,REMOVE_FAVOURITE,SET_SHOW_FAVOURTIES } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites : false
};

export default function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE :
        return {
            ...state,
            favourites :[action.movie , ...state.favourites]
        }
    case REMOVE_FAVOURITE :
        const new_array = state.favourites.filter(
            movie => movie.Title !== action.movie.Title
        )
        return{
            ...state,
            favourites : new_array
        }
    case SET_SHOW_FAVOURTIES :
        return{
            ...state,
            showFavourites : action.val
        }
    default:
      return state;
  }
}
