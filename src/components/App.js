import { data } from "../data";
import { Component } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFavourites } from "../actions";

class App extends Component {
  // suppose u have to fetch the data froma an API unlike here ,so we need to ComponentDidMount
  // which requires CLASS_COMPONENT
  componentDidMount() {
    // make an api call
    // now we are not making an API call so instead lets dispatch an action using dispatch()
    // t get some movies here using data
    const { store } = this.props;
    // subscribing the store
    store.subscribe(() => {
      // console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));

    // console.log("STATE", this.props.store.getState());

    // flow of code execution - line -20 -15-25
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found thr movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const {movies} = this.props.store.getState(); // {movies , search}
    const { list, favourites, showFavourites } = movies;
    // console.log("STATE", this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;


    return (
      <div className="App">
        <Navbar />
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
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to display </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
