import React, { Component } from "react";
import { movies } from "../movieData";

export class MoviesList extends Component {
  render() {
    let moviesArr = movies.results

    return (
      <>
        <div>
          <h3 className="text-center"><strong>Trending</strong></h3>
        </div>

        <div className="movies-list">
          {
            moviesArr.map((movieElem) => (
              <div className="card movie-card">
                <img src="https://images7.alphacoders.com/117/1174976.jpg" style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />
                <h5 className="card-title movie-title">{movieElem.title}</h5>

                <div className="button-wrapper" style={{display:'flex', justifyContent:'center'}}>
                  <a href="#" className="btn btn-primary movies-button text-center">Add to Favourites</a>
                </div>

              </div>
            ))
          }
        </div>
      </>
    );
  }
}

export default MoviesList;
