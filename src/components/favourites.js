import React, { Component } from "react";

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouritesMovies: ""
        }
    }

    componentDidMount() {
        this.setState({favouritesMovies: JSON.parse(localStorage.getItem("moviesArray"))});
    }

    render() {
        const {favouritesMovies} = this.state;
        if(!favouritesMovies) {
            return <h3 className="text-center">No Favourites Present</h3>
        }
        return (
            <div className="container">
                <h1 className="text-center">Your Favourites</h1>
                <div className="row">
                    {favouritesMovies.map((item, index) => {
                        return item.favourite === true &&
                        <div className="card col-3 m-4 border border-dark" key={index}>
                            <img src={item.Poster} className="card-img-top" alt="" />
                            <div className="card-body">
                            <h5 className="card-title">{item.Title}</h5>
                            <p className="card-text">{item.Released}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Favourites;