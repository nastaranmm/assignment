import "./Header.css";
import React, { useState, useEffect } from 'react'

function Header(){
    // const [header, setHeader] = useState("header");

    // const listenScrollEvent = (event) => {
    //     if (window.scrollY < 73) {
    //       return setHeader("header")
    //     } else if (window.scrollY > 70) {
    //       return setHeader("header2")
    //     } 
    //   }
      
    //   useEffect(() => {
    //     window.addEventListener('scroll', listenScrollEvent);
      
    //     return () =>
    //       window.removeEventListener('scroll', listenScrollEvent);
    //   }, []);
      
    return(
        <div className="header">
            <div className="headerleft">
                 <a href="" target="">BROOKE</a>
               
            </div>
            <div className="headeright">
                 <a href="" target="">About Me</a>
                <a href="" target="">Exprience</a>
                <a href="" target="">HEll</a>
                <a href="" target="">NOooo</a>
            </div>
        </div>
    )
}

export default Header