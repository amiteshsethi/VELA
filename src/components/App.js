import { data } from "../data";
import { Component } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

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
      console.log("Updated");
      this.forceUpdate();
      
    });
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("STATE", this.props.store.getState());

    // flow - line -20 -15-25 
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies </div>
            <div className="tab">favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
