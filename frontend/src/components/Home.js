import React, { useEffect, useState } from 'react';
import Slider from './slider/Slider';
import Poster from './poster/poster';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Home(){
    var srch = '';
    const navigate = useNavigate();
    async function getdat(url){
        const response = await fetch(url);
        const data = await response.json(); 
        navigate('/result' , {state : {results : data }});
        console.log(data);
    }
    function handleSubmit(e){
        e.preventDefault();
        const url= `https://api.tvmaze.com/search/shows?q=${srch}`;
        getdat(url);
        console.log(srch);
    }

    const [mydat,setMyDat]=useState([])
    useEffect(()=>{
        const gtdt = async()=>{axios.get("https://api.tvmaze.com/shows")
        .then((res)=>setMyDat(res.data));
      }
      gtdt();
      
    },[]);
    return(<>
        <Poster data = {mydat}/>
        <form onSubmit={handleSubmit} className='search'>
            <input type='text' onChange={(e)=>{srch = e.target.value}} placeholder='Search..'/>
            <button type='submit' className='srch'><i className="fa fa-search"></i></button>
        </form>
        <Slider data={mydat} type="Science-Fiction"/>
        <Slider data={mydat} type="Drama"/>
        <Slider data={mydat} type="Thriller"/>
        <Slider data={mydat} type="Horror"/>
    </>);
}