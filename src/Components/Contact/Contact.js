import "./Contact.css";
import callImg from "../../contact.webp"

function Contact(){
    return(
        <div className="call">
            <div className="formdiv">
            <span >Let's Talk</span>
                <form >
                    <label>Name</label><br/>
                    <input type ="text"></input><br/>
                    <label>Your Email*</label><br/>
                    <input type ="text"></input><br/> 
                    <label>Message*</label><br/> 
                    <textarea></textarea><br/>
                    
                    <button>Submit</button>
                    

                </form>
            </div>
            <div className="callimg">
                <img className="contact" src={callImg}/>    
            </div>
        </div>
    )}

export default Contact    