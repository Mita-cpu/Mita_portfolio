import React from "react";
import {Link} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <span>Created By <Link to="/">Mita Raboya</Link> | <span class="far fa-copyright"></span> 2021 All rights reserved.</span>
        </div>
    )
}

export default Footer;