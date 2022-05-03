import "./photos.css";
import React from "react";
import left from "../../left.webp";
import middle from "../../middle.webp";
import right from "../../right.webp";

function Photos(){
    return(
        <div className="photos">
           <div className="first"><img className="left" src={left}/></div> 
            <div className="second"><img className="middle" src={middle}/></div>
           <div className="third"><img className="right" src={right}/></div> 
        </div>
    )}

    export default Photos