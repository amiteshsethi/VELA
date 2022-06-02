import { data as moviesList } from "../data";
import { Component } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFavourites } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  // suppose u have to fetch the data froma an API unlike here ,so we need to ComponentDidMount
  // which requires CLASS_COMPONENT

  componentDidMount() {
    // make an api call
    // now we are not making an API call so instead lets dispatch an action using dispatch()
    // t get some movies here using data
    // console.log('this.props',this.props)
    this.props.dispatch(addMovies(moviesList));
    // console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props; // {movies , search}
    const { list, favourites, showFavourites } = movies;

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie,index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Favourite Movies to display </div>
          ) : null}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) { // this (state) is teh actual whole REDUX-STORE-STATE
  return {
      movies : state.movies,
      search : state.search,
  }
}

const connectedAppComponent =  connect(mapStateToProps)(App)

export default connectedAppComponent;
