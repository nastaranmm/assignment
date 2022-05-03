import "./About.css";
import left from "../../left.webp";
import middle from "../../middle.webp";
import right from "../../right.webp";

function About(){
    return(
        <div className="about">
        
            <div className="history">
                
                <p className="back">
                  <h4>-My background</h4>
                    I’ve gone through a number of phases in my career, and each of them has informed my current work ethos and philosophy. I have excelled in a number of project management roles in diverse industries, and believe that my number one asset is my ability to adapt to any challenge that is thrown my way.</p>
            </div>
            <div className="skill">
                <h4>-skills</h4>
                <ol>
                    <li> Leadership</li>
                    <li> Communication</li>
                    <li> Critical thinking</li>
                    <li> Risk management</li>
                    <li> Cost management</li>        
                </ol>
            </div>
     

        </div>
    )}

    export default About