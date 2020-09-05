import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap'
import "./sideBar.css"
export default function SideComponent({ url, img, text }) {
    return (

        <div className="root">
            <Link to={url} >
                <Image src={img} alt="Avatar" className="image" style={{ width: "25vh", height: "25vh", objectFit: "cover" }} />
                <div className="overlay">
                    {text}
                </div>
            </Link>

        </div>
    )
}
