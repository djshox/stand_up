import React, { useEffect } from "react"
import TopPage from '../components/topPage'
import { setMenuThunk } from "../Reducers/homeMenu"
import { getSubMenusThunk, addSlider } from "../Reducers/subMenus"
import { BACKEND_URL } from "setting.js";
import flag from "./../images/flag.jpg"
import { Carousel } from 'antd';
import Player from "../Player"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

const contentStyle = {
    height: '80vh',
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
};

let subMenuId = 0;
function Actions({ getSubMenusThunk, getSubMenus, getIsParent, addSlider }) {
    let { infoId } = useParams();

    useEffect(() => {
        if (getIsParent.type === '0') {
            getSubMenusThunk(infoId);
        }
        else {
            addSlider(getIsParent);
        }
        subMenuId = infoId;
    }, [getSubMenusThunk, infoId, addSlider, getIsParent])

    return (
        <>
            <TopPage />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-10 offset-1 bg-white" >
                        <Carousel dots={false}>
                            {((subMenuId === infoId) && !!getSubMenus) ? getSubMenus.map(card => {
                                return (
                                    <div key={card.id}>
                                        {card.type === '2' ?
                                            <img alt="example" src={card.url ? BACKEND_URL + card.url : flag} style={contentStyle} />
                                            : <Player playing={false} showControl={true} url={BACKEND_URL + card.url} width="100%" height="70vh" className="m-n4" />
                                        }
                                        <h3 className="text-center"> {card.name}</h3>
                                        <div className="text-center pb-2"> {card.description} </div>
                                    </div>
                                )
                            }) : null
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapState = ({ getSubMenus, getIsParent }) => ({ getSubMenus, getIsParent })

export default connect(mapState, { setMenuThunk, getSubMenusThunk, addSlider })(Actions)