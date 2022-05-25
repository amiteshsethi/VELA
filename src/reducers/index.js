import { ADD_MOVIES, ADD_FAVOURITE ,REMOVE_FAVOURITE,SET_SHOW_FAVOURTIES } from "../actions";
import { combineReducers } from "redux";
const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites : false
};

export function movies(state = initialMovieState, action) {
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

const initialSearchState = {
  result :{} 
}

export function search (state = initialSearchState , action) {
  return state
}

// const initialRootState = {
//   movies : initialMovieState ,
//   search : initialSearchState

// }

// // export default function rootReducer (state= initialRootState, action) {
// //   return {
// //     movies : movies(state.movies, action),
// //     search : search(state.search, action)
// //   }
// // }

export default combineReducers({
  movies : movies,
  search : search
})