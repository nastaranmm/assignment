import "./Footer.css";

function Footer(){
    return(
        <div className="footer">
            <div className="name">
                <p className="footerp">Brooke R.<br/>
                <a className="hrefp" href="www.github.com" target="_blank">Github</a>
                </p>
                
            </div>
            <div className="socials">
                <div className="social">
                    <span >― SOCIALS</span>
                    <ol className="list"> 
                        <li><a href="www.linkedin.com" target="_blank">Linkedin</a></li>
                        <li><a href="www.linkedin.com" target="_blank">facebook</a></li>
                        <li><a href="www.linkedin.com" target="_blank"> Twiiter</a></li>
                    </ol>
                </div>
                <div>
                <span> ― CONTACTS</span>
                    <ol>
                        <li>Brook@gmial.com</li>
                        <li>123-1234-123</li>
                    </ol>
                </div>
            </div>
        </div>
    )}

    export default Footer