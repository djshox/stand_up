import React from 'react';
import './style.css'
// import Menu1 from './menu1'
import { Link } from 'react-router-dom'
// import App from './HomePage'


function Menu() {
    return (

        <div className='body'>
            <div>
                <span><span></span></span>
                <div className="wrap">
                    <Link to="/menu1">
                        <div style={{ backgroundImage: "url(" + require('./images/tarix.jfif') + ")" }}></div>
                    </Link>
                    <Link to="/menu2">
                        <div style={{ backgroundImage: "url(" + require('./images/prisyaga.jpg') + ")" }}></div>
                    </Link>
                    <Link to="/menu3">
                        <div style={{ backgroundImage: "url(" + require('./images/prezident.jpg') + ")" }}></div>
                    </Link>
                    <a href="/menu4">
                        <div style={{ backgroundImage: "url(" + require('./images/veteranlar.jpg') + ")" }}></div>
                    </a>
                    <Link to="/">
                        <div style={{ backgroundImage: "url(" + require('./images/kisspng.jpg') + ")" }}></div>
                    </Link>
                </div>



            </div>
        </div>
    );
}

export default Menu;