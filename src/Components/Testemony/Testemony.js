import "./Testemony.css";
import testimony1 from "../../testimony1.webp";
import testimony2 from "../../testimony2.webp";


function Testemony(){
    return(
        <div className="testimony">
            <span className="testimoni">What To Say...</span>
            
            
                <div className="testimony1-div"> 
                 <img className="imgtestimony1" src={testimony1}/> 
                     <div className="testimony1-indiv">
                         <span>― JEREMY WATSON</span>
                        <p className="ptestimony1">
                        We've worked on many projects together with Brooke at Stilltech, and she's a true asset to any team. She's a team player, but think on her feet and never settles for a no. Her ambition and passion for what she does is uncanny, and it's been a pleasure to see her progress and grow more confident in her professional role over time. I thoroughly recommend her for any leadership or project management roles.
                        </p>
                     </div> 
                    
                </div>
            
             <div className="testimony2-div">
                <img className="imgtestimony2" src={testimony2}/> 
                    <div>
                        <span>― LIANNE HAYES</span>
                        <p className="ptestimony2">
                            Brooke was my manager at Yeall & Co and taught me everything I know about project management. As an intern, she never treated me differently from other team members – instead, she whole-heartedly embraced my ideas and input. She helped me to think about the bigger picture and implement strategy into my everyday work, but also showed me how to bring people together and unite them for a single goal. 
                        </p>
                    </div>
             </div>
            
            
            
        </div>

    )}

    export default Testemony