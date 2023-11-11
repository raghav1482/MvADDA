import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "./item.css";
export default function Item(props){
  const url ="https://movieaddabknd.onrender.com";
  var det = props.detail+'';
  const navigate =useNavigate();
  const handleClick = ()=>{
    navigate("/Moviedesc" , {state:{image:props.imag , title : props.title , detail : props.detail , page:props.page}});
  }
  const addfav = async(data) =>{
    const id = sessionStorage.getItem("id");
    if(id){
    axios.post(`${url}/api/v1/addfav`,{id,favourite:data}).then((response)=>{
      alert(response.data.message);
    })
  }
  else{
    alert("Please Sign in");
  }
  }

  const delfav = async(title)=>{
    const id = sessionStorage.getItem("id");
    if(id){
      axios.delete(`${url}/api/v1/delfav/${id}?title=${title}`).then((response)=>{
        alert(response.data.message);
      })
    }
  }

return(<>

        <div className="card">
          <img src={props.imag}/>
          <div className="fv-btns">
            {props.fav && <button className="fav-btn" title="Add to favourites!!" onClick={()=>{return addfav(props)}}><i className="fa fa-heart"></i></button>}
            {props.del &&<button className="fav-btn" title="Remove from Favourites!!" onClick={()=>{return delfav(props.title)}}><i className="fa fa-trash-o"></i></button>}
          </div>
          <h1 className="titleoverlay">{props.title}</h1>
            <div className="descriptions">
                <p dangerouslySetInnerHTML={{ __html: det.slice(0,230)+" ..." }} ></p>
                <button  className="button-62" onClick={handleClick}>Read More</button>
            </div>
        </div>
</>);
};
