import React from 'react';
import backgroundPic from "../assets/background.jpg";
import {Link} from  "react-router-dom"
import "../styles/Home.css"

function Home() {
    return (
        // <div className="home" style={{backgroundImage: `url(${backgroundPic})`}}>
        //     <div className="homeContainer" >
        //         <h1>Hello, my name is</h1>
        //         <p>Mita Raboya</p>
        //     </div>
        // </div>
        <div className="home" id="home" style={{backgroundImage: `url(${backgroundPic})`}}>
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Mita Raboya</div>
                <div className="text-3">And I'm a <span className="typing">Software Developer</span></div>
                <p>Equipped with a diverse and promising skill set,<br/> with advanced understanding in Software development</p>
                <Link to="/about">Read more</Link>
            </div>
        </div>
    </div>
    )
}

export default Home;