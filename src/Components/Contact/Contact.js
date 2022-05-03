import "./Contact.css";
import callImg from "../../contact.webp"

function Contact(){
    return(
        <div className="call">
            <div className="form">
            <span className="testimoni">Let's Talk</span>
                <form>
                    <label>Name</label><br/>
                    <input type ="text"></input>
                </form>
            </div>
            <div>
                <img className="contact" src={callImg}/>    
            </div>
        </div>
    )}

export default Contact    