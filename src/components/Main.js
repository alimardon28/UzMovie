import React, {  useState } from 'react';
import {useEffect} from "react/cjs/react.development"
import logo from '../components/assets/img/logo.gif'
import Card from './Card';

let API_KEY = "&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url+"/discover/movie?sort_by=popularity.desc"+API_KEY;
let arr = ['Popular' , 'Theatre', 'Kids' , 'Drama' , 'Comedie']


const Main = () => {

    const [movieData , setData] = useState([]);
    const [url_set , setUrl] = useState(url);
    const [search , setSearch] = useState()


   useEffect(()=>{
        fetch(url_set).then(res => res.json()).then(data => {
            setData(data.results);
        });
   }, [url_set])


const getData=(movieType)=>{
    if(movieType === "Popular")
    {
        url = base_url+"/discover/movie?sort_by=popularity.desc"+API_KEY;
    }

    if(movieType === "Theatre")
    {
        url = base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_KEY;
    }
    if(movieType === "Kids")
    {
        url = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_KEY;
    }
    if(movieType === "Drama")
    {
        url = base_url + "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+API_KEY;
    }
    if(movieType === "Comedie")
    {
        url = base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_KEY;
    }
    setUrl(url);
}

const searchMovie =(evt) =>{
    if(evt.key=="Enter")
    {
       url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
       setUrl(url);
       setSearch("");
    }
}

    return (
        <>
        <div className='main'>
             <nav>
                <img  className='logo' src={logo} alt="uzmovie logo"/>
                 <ul>
                     {
                      arr.map((value , pos) => {
                             return(
                                 <li><a href='#' key={pos} onClick={(e) => {getData(e.target.name)}} name={value}>{value}</a></li>
                             )
                         })
                     }
                 </ul>
             </nav>

             <form className='form'>
                 <div className='search__box'>
                    <input onChange={(e) => {setSearch(e.target.value)}} type='text' value={search} placeholder='UzMovie Search...' className='input' onKeyPress={searchMovie} />
                    <button className='movie__btn'>Add</button>
                 </div>
             </form>
        </div>

        <div className='container'>
            {
                (movieData.length==0)?<p className='desc'>Not Found</p>: movieData.map((res,pos)=>{
                  return (
                      <Card info={res} key={pos} />
                  )
                })
            }
        </div>
    </>
    );
}

export default Main;
