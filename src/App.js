import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieSearch from './components/movie-search';
import Favourites from './components/favourites';

function App() {
    return (
      <Router> 
        <div className="container"> 
          <nav className="navbar navbar-light bg-light">
            <Link className="nav-link font-weight-bold text-black-50" to="/">Home</Link>
            <Link className="nav-link font-weight-bold text-black-50" to="/favorites">Favourites</Link>
          </nav>
          <Switch> 
            <Route exact path='/' component={MovieSearch}></Route> 
            <Route exact path='/favorites' component={Favourites}></Route> 
          </Switch> 
        </div> 
      </Router>
    );
}

export default App;
