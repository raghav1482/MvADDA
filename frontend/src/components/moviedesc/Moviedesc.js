import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./moviedesc.css";
export default function Moviedesc(){
const location = useLocation();
const [data , setData] = useState(location.state);
console.log(data);
return(<>
<div className="maindiv">
  <img src={data.image}/>
  <div>
    <h2>{data.title}</h2>
  <p><span dangerouslySetInnerHTML={{ __html: data.detail }} ></span></p>
  <a href={data.page}>More</a>
 </div>
</div>
</>);
};