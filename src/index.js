import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
import './style.css';
import moviedblogo from './moviedblogo.svg';

class Main extends React.Component {
  render() {
    return(
      <div className="container">
        <p className="special">Sandman Solutions Presents...</p><h1 className="title">Movie Hunter</h1>
        <SearchMovies/>
        <p className="special2">Powered By...</p>
        <img src={moviedblogo} className="logo" alt="logo" />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));