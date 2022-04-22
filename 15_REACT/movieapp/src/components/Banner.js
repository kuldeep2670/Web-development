import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div className="card banner-card">
                <img src="https://images7.alphacoders.com/117/1174976.jpg" className="card-img-top banner-img" alt="..." />
                <h5 className="card-title banner-title">Iron Man</h5>
                <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        )
    }
}

export default Banner