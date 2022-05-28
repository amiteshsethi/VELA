// {
//     type : 'ADD_MOVIES',
//      movvies : [m1,m2,m3]
// }


// action types 
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const SET_SHOW_FAVOURTIES = 'SET_SHOW_FAVOURTIES'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'

//action creaters 
export function addMovies (movies) {
    return {
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie) {
    return {
        type : ADD_FAVOURITE,
        movie
    }
}

export function removeFavourite (movie) {
    return {
        type : REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourites (val) {
    return {
        type : SET_SHOW_FAVOURTIES,
        val
    }
}

export function addMovieToList (movie) {
    return {
        type : ADD_MOVIE_TO_LIST ,
        movie
    }
}

export function handleMovieSearch (movie) {

    const url = `https://www.omdbapi.com/?apikey=8e4fe7b4&t=${movie}`;

    // an async action in form of a function
    return function(dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie',movie)

            // dispatch an action
            dispatch(addMOvieSearchResult(movie))

        })
    }
}

export function addMOvieSearchResult (movie) {
    return {
        type :ADD_SEARCH_RESULT,
        movie
    }
}