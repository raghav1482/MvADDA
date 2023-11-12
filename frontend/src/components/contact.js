import React from "react";
import "../App.css";
import "./contact.css";

export default function Contact(){
    return(<>
    <div className="container1" style={{color:"white" , width:"60%" , margin:"auto"}}>
      <h1 style={{textAlign:"center" , marginBottom:"30px"}}>Contact US</h1>
  <form className="contact" action="mailto:recipient@example.com" method="post" enctype="text/plain">
    <div style={{display:"flex" , margin:"auto" , justifyContent:"space-between" , width:"100%"}}>
    <input type="text" id="fname" name="firstname" for="name" placeholder="Your name.." style={{marginBottom:"20px"}}/></div>

    <div style={{display:"flex" , margin:"auto" , justifyContent:"space-between" , width:"100%"}}>
    <input type="email" id="lname" name="email" for="email" placeholder="Your email.." style={{marginBottom:"20px"}}/></div>

    <div style={{display:"flex" , margin:"auto" , justifyContent:"space-between" , width:"100%"}}><br/>
    <textarea id="message" name="message" for="message" placeholder="Write something.." style={{height:"100px" , width:"40%" , margin:"auto"}}></textarea><br/></div>

    <input type="submit" className="button-62" style={{marginTop:"30px"}} value="Submit"/>
  </form>
</div>
    </>);
}