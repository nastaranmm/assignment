import "./Hero.css";
import itsImg from "../../main.webp"
import React from "react";

function Hero(){
    return(
         <div className="hero">
             <div className="brookdiv">
             <p className="hi" >
             Hi, I am Brooke, a project manager 
                  
             </p>
             <div className="btndiv">
                 <button className="btn">
                     Email me
                 </button> 
            </div> 
             <span className="link">
                <a href="facebook.com"target="_blank"> Linkedin/ </a>
                <a href="facebook.com"target="_blank"> facebook/ </a>
                <a href="facebook.com"target="_blank"> Twitter </a>
            </span>
             </div>
            <div className="imgdiv">
            <img className="" src={itsImg}/>
            </div>
        </div>
    )
}

export default Hero