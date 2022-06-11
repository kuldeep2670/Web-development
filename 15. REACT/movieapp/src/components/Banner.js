import React, { Component } from 'react'
//import {movies} from '../movieData'
import axios from 'axios'

export class Banner extends Component {
    constructor() {
        super()
        this.state = {
            movies: ''
        }
    }
    async componentDidMount() {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e091c04a3856b50c36595519d4abbdd2&language=en-US&page=1')
        let movieData = res.data
        //console.log(movieData)
        // console.log(movieData.results[1].backdrop_path)
        this.setState({
            movies: movieData.results[Math.floor((Math.random() * 10) + 1)]
        })
    }
    render() {
        // let moviesArr = movies.results[Math.floor((Math.random() * 10) + 1)];
        // let backDrop = moviesArr.backdrop_path

        // console.log(this.state.movies[1].backdrop_path)
        // let backDrop = '/6EdKBYkB1ssgGjc249ud1L55o8d.jpg'

        return (

            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${this.state.movies.backdrop_path}`} className="card-img-top banner-img" alt="..." />
                <h5 className="card-title banner-title">{this.state.movies.title}</h5>
                <p className="card-text banner-text">{this.state.movies.overview}</p>
            </div>
        )
    }
}

export default Banner