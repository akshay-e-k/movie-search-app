import React, {Component} from 'react';
import "jquery";
import 'bootstrap/dist/js/bootstrap.min.js';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      title: "",
      type:""
    }
  }
  setValues = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  getData = (e) => {
    e.preventDefault();
    let url = "https://www.omdbapi.com/?apikey=4551086f&t=" + this.state.title + "&type=" + this.state.type;
    console.log(url);
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
      this.setState(prevState => ({
        dataArray: [...prevState.dataArray, data]
      }))
    })
  }
  handleFavourite = (item,index) => {
    if(!item.favourite) {
      item.favourite = true
    }
    else {
      item.favourite = !item.favourite;
    }
    const arr = this.state.dataArray;
    arr[index] = item;
    this.setState({dataArray: arr});
    localStorage.setItem('moviesArray', JSON.stringify(arr));
  }
  render() {
    const {dataArray} = this.state;
    return (
      <div className="container">
        <div className="col-5 offset-md-3 my-4">
          <form className="form-inline">
            <div className="form-group mr-2" onChange={this.setValues}>
              <input className="form-control border border-dark" placeholder="Title" type="text" name="title" required />
            </div>
            <div className="form-group mr-2">
              <select className="form-control border border-dark" name="type" onChange={this.setValues}>
                <option value="">--select--</option>
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>
            </div>
            <button className="form-control btn btn-primary" onClick={this.getData}>Search</button>
          </form>
        </div>
        <div className="row">
          {dataArray.map((item, index) => {
            return (item.Response === "True" ? (
              <div className="card col-3 m-4 border border-dark" key={index}>
                <img src={item.Poster} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p className="card-text">{item.Released}</p>
                  <a href="#" className="btn btn-primary" onClick={() => this.handleFavourite(item,index)}>
                    {item.favourite ? "Favourite" : "UnFavourite"}
                  </a>
                </div>
              </div>
            ) : (
                <div class="alert alert-danger alert-dismissible">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{item.Error}</strong>
                </div>
            ))
          })
          }
        </div>
      </div>
    );
  }
}

export default MovieSearch;
