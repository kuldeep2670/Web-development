import React, { Component } from "react";
//import { movies } from "../movieData";

import axios from 'axios'

export class MoviesList extends Component {

  constructor() {
    super()
    this.state = {
      hover: '',
      parr: [1],
      movies: [],
      currPage: 1,
    }
  }

  async componentDidMount() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e091c04a3856b50c36595519d4abbdd2&language=en-US&page=${this.state.currPage}`)
    let movieData = res.data
    //console.log(movieData)
    console.log(movieData.results[1].backdrop_path)
    this.setState({
      movies: [...movieData.results]
    })
  }

  changeMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e091c04a3856b50c36595519d4abbdd2&language=en-US&page=${this.state.currPage}`)
    let movieData = res.data
    //console.log(movieData)
    this.setState({
      movies: [...movieData.results]
    })
  }

  handleNext = () => {
    let tempArr = []
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i)
    }
    this.setState({
      parr: [...tempArr],
      currPage: this.state.currPage + 1,
    }, this.changeMovies)

  }

  handlePrevious = () => {
    if (this.state.currPage != 1) {
      this.setState({
        currPage: this.state.currPage - 1
      }, this.changeMovies)
    }
  }

  handlePageClick = (value) => {
    if (value != this.state.currPage) {
      this.setState({
        currPage: value
      }, this.changeMovies)
    }
  }

  render() {

    return (
      <>
        <div>
          <h3 className="text-center"><strong>Trending</strong></h3>
        </div>

        <div className="movies-list">
          {
            this.state.movies.map((movieElem) => (
              <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movieElem.id })} onMouseLeave={() => this.setState({ hover: '' })}>
                <img src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movie-img" alt="..." />
                <h5 className="card-title movie-title">{movieElem.title}</h5>

                <div className="button-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                  {
                    this.state.hover == movieElem.id && <a href="#" className="btn btn-primary movies-button text-center">Add to Favourites</a>
                  }
                </div>

              </div>
            ))
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" onClick={this.handlePrevious}>Previous</a></li>
              {
                this.state.parr.map((value) => (
                  <li className="page-item"><a className="page-link" onClick={() => this.handlePageClick(value)}>{value}</a></li>
                ))
              }

              <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MoviesList;