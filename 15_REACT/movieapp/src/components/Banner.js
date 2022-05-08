import React, { Component } from 'react'
//import {movies} from '../movieData'

export class Banner extends Component {
    render() {
        // let moviesArr = movies.results[Math.floor((Math.random() * 10) + 1)];
        // let backDrop = moviesArr.backdrop_path
        let backDrop = '/6EdKBYkB1ssgGjc249ud1L55o8d.jpg'

        return (
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${backDrop}`} className="card-img-top banner-img" alt="..." />
                <h5 className="card-title banner-title">Jurassic Hunt</h5>
                <p className="card-text banner-text">Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!</p>
            </div>
        )
    }
}

export default Banner