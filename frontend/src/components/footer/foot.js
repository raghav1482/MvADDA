import React from "react";
import "./foot.css";

export default function Foot(){
    return(<>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">At MovieADDA, we are passionate about providing an exceptional entertainment experience for our viewers. With a vast library of content, cutting-edge features, and a user-friendly interface, we strive to be the ultimate destination for all your streaming needs.</p>
          </div>

        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Made with <img src="https://media.tenor.com/NRtK5xTyAEsAAAAi/heart-red.gif" style={{width:"15px"}}/> 
          <a href="/"> Raghvendra</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 soc">
            <ul className="social-icons">
              <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>);
}