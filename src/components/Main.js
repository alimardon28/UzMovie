import React from 'react';
import logo from '../components/assets/img/logo.gif'

const Main = () => {
    return (
        <div className='main'>
             <nav>
                <img  className='logo' src={logo} alt="uzmovie logo"/>
                 <ul>
                     <li><a href='/'>Popular</a></li>
                     <li><a href='/'>Theatre</a></li>
                     <li><a href='/'>Kids</a></li>
                     <li><a href='/'>Drama</a></li>
                     <li><a href='/'>Comedie</a></li>
                 </ul>
             </nav>

             <form className='form'>
                 <div className='search__box'>
                    <input type='text' placeholder='UzMovie Search...' className='input' />
                    <button className='movie__btn'>Add</button>
                 </div>
             </form>
        </div>
    );
}

export default Main;
