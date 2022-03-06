import React from 'react';

const Main = () => {
    return (
        <div className='main'>
             <nav>
                 <ul>
                     <li><a href='/'>Popular</a></li>
                     <li><a href='/'>Theatre</a></li>
                     <li><a href='/'>Kids</a></li>
                     <li><a href='/'>Drama</a></li>
                     <li><a href='/'>Comedie</a></li>
                 </ul>
             </nav>

             <form>
                 <div className='search__box'>
                    <input type='text' placeholder='UzMovie Search...' className='input' />
                    <button>Add</button>
                 </div>
             </form>
        </div>
    );
}

export default Main;
