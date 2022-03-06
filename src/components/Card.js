import React from 'react';

const Card = () => {
    return (
        <div className='cardUzMovie'>
        <div className='Card__box'>
            <img src='https://freesoft.ru/storage/images/news/1/6/555/555_text.png' alt='movie img' className='movieImg'/>
            <div className='uzMovieDetailes'>
               <div className='movie__box'>
                   <h4>Movie</h4>
                   <p>9.4</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card;
