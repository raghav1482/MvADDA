import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import emptypng from "../images/empty.png" 
import "./fav.css";
import axios from 'axios';

function Fav() {
    const [mdat , setDat] = useState([]);
    const id = sessionStorage.getItem("id");
    const url ="https://mv-adda-api.vercel.app";
    
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`${url}/api/v1/getfavs/${id}`);
                    setDat(response.data.favorites.reverse()); 
            } catch (error) {
              alert("ERROR fetching data :(");
            }
        }
        getData();
    }, [mdat]);
  return (<>
        <h1 style={{width:"max-content" , textAlign:"center" ,margin:"20px auto",padding:"10px 20px", backgroundColor:"white" , color:"red" , borderRadius:"10px"}}>Favourites</h1>
    <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center",marginBottom:"200px"}}>
                  {mdat.length>0 ? mdat.map((dat)=>{
                return <div style={{margin:"20px"}} key={dat.title}>    <Item
                title={dat && dat.title ? dat.title : "Unknown"}
                page={dat && dat.page ? dat.page : "#"}
                imag={dat && dat.imag ? dat.imag : "https://cdn2.vectorstock.com/i/1000x1000/54/01/video-camera-simple-icon-movie-film-reel-vector-31045401.jpg"}
                keys={dat && dat.keys ? dat.keys : ""}
                detail={dat && dat.detail ? dat.detail : "" } fav={false} del={true}
              /></div>
            }):<><div className='empty'><img src={emptypng}/><h1>EMPTY:(</h1></div></>}
    </div>
    </>

  )
}

export default Fav
