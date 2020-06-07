import React, {useState} from 'react';
import MovieCard from './movieCard';

export default function SearchMovies(){

    // states - input query, movies

    const[query, setQuery] = useState('');

    const[movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=054eec57ef15d785c72a137c419d19a5&language=en-US&query=${query}&page=1&include_adult=false`;

        try {

        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);


        }catch(err) {
        console.log(err);
        }


    }

    return (
    <div className="wrapper"> 
        <form className="form" onSubmit={searchMovies}>    
            <label className="label" htmlFor="query"></label>
            <input className="input" type="text" name="query" placeholder="enter movie"
            value={query} onChange={(e) => setQuery(e.target.value)}
            
            /> 
            <button className="button" type="submit">Search</button>
        </form>
         <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
                   
            ))}
        </div>       
                
    </div>
    )
}