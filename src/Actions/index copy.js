import React, { useEffect } from "react"
import TopPage from '../components/topPage'
import { Card } from 'antd';

// import emblem from "./../images/emblem.jpg"
import { setMenuThunk } from "../Reducers/homeMenu"
import { getSubMenusThunk } from "../Reducers/subMenus"
import { BACKEND_URL } from "setting.js";
import flag from "./../images/flag.jpg"
import { connect } from "react-redux"
import { useParams, Link } from "react-router-dom"
const { Meta } = Card;

const imgStyles = {
    height: '200px', objectFit: "scale-down", paddingTop: '5px'
}

let subMenuId = 0;
function Actions({ getSubMenusThunk, getSubMenus }) {
    let { id } = useParams();
    useEffect(() => {
        getSubMenusThunk(id);
        subMenuId = id;
    }, [getSubMenusThunk, id])

    return (
        <>
            <TopPage />
            <div className="container-fluid mt-4">
                <div className="row">
                    {((subMenuId === id) && !!getSubMenus) ? getSubMenus.map(card => {
                        return (
                            <div className="col-3 mb-4" key={card.id}>
                                <Link to={`/action/${id}/info/${card.id}`} >
                                    <Card
                                        hoverable
                                        cover={<img alt="example" src={card.url ? BACKEND_URL + card.url : flag} style={imgStyles} />}
                                    >
                                        <Meta title={card.name} description={card.description.slice(0, 80) + "..."} />
                                    </Card>
                                </Link>
                            </div>
                        )
                    }) : null
                    }
                </div>
            </div>
        </>
    )
}
const mapState = ({ getSubMenus }) => ({ getSubMenus })

export default connect(mapState, { setMenuThunk, getSubMenusThunk })(Actions)


