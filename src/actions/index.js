// {
//     type : 'ADD_MOVIES',
//      movvies : [m1,m2,m3]
// }


// action types 
export const ADD_MOVIES = 'ADD_MOVIES'


//action creaters 
export function addMovies (movies) {
    return {
        type : 'ADD_MOVIES',
        movies
    }
}