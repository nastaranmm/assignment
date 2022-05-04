import "./photos.css";
import React from "react";
import left from "../../left.webp";
import middle from "../../middle.webp";
import right from "../../right.webp";

function Photos(){
    return(
        <div className="photos">
           <div className="left"><img  src={left}/></div> 
            <div className="middle"><img  src={middle}/></div>
           <div className="right"><img  src={right}/></div> 
        </div>
    )}

    export default Photos