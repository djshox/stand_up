import React from "react"
import {useHistory} from "react-router-dom"
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";


import "./navbar.css";

export default function Navbar(){
    const h = useHistory()
    return (
        <div className="_navbar">
            <Breadcrumb>
                <Breadcrumb.Item onClick={()=>h.push("/")}>Home</Breadcrumb.Item>
                <Breadcrumb.Item onClick={()=>h.push("/menu1")}>
                   Menu 1
                </Breadcrumb.Item>
                <Breadcrumb.Item active>&nbsp;&nbsp;</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}