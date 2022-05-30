import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURTIES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

import { combineReducers } from "redux";
const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITE:
      const new_array = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: new_array,
      };
    case SET_SHOW_FAVOURTIES:
      return {
        ...state,
        showFavourites: action.val,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {}, // last 5 mins of modd-03 last video
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults :false,
      };
    default:
      return state;
  }
}

// this is our custom made comnbine-reducers

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
  movies: movies,
  search: search,
});
