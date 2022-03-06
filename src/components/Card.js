import React from 'react';
import img from '../components/assets/img/new_icons.gif'

const Card = (movie) => {
  console.log(movie);
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <div className='cardUzMovie'>
          <div className='Card__box'>
            <img src={img_path + movie.info.poster_path} alt='movie img' className='movieImg'></img>
            <img className='iconsImg' src={img}  alt='new icons'/>
             <div className='uzMovieDetailes'>
               <div className='movie__box'>
                   <h4>{movie.info.original_title}</h4>
                   <p>{movie.info.vote_average}</p>

                </div>
            </div>
          </div>
        </div>
    );
}

export default Card;
