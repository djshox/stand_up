import React, { useEffect, useState } from "react"
import TopPage from '../components/topPageAction'
import { setMenuThunk } from "../Reducers/homeMenu"
import { getSubMenusThunk } from "../Reducers/subMenus"
import { BACKEND_URL } from "setting.js";
import flag from "./../images/flag.jpg"
import Player from "../Player"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { ButtonGroup, Button } from 'react-bootstrap';

const contentStyle = {
    height: '80vh',
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
};
const prevnext = {
    height: '80vh',
    fontSize: '40px',
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    color: "rgba(0,0,0,.5)"
};
let sliderLen = 0;
function Actions({ getSubMenusThunk, getSubMenus, getIsParent }) {
    let { infoId } = useParams();
    const [card, setCard] = useState({})
    const [id, SetId] = useState(0)
    // const [isPhoto, SetIsPhoto] = useState(true)
    useEffect(() => {
        if (getIsParent.type === '0') {
            if (sliderLen !== getSubMenus.length) {
                sliderLen = getSubMenus.length
                getSubMenusThunk(infoId);
            }
            setCard(getSubMenus[id])
        }
        else {
            setCard(getIsParent)
            sliderLen = 999
        }
    }, [getSubMenusThunk, infoId, getSubMenus, getIsParent, card, id])

    const nextSlider = () => {
        SetId((id + 1) % getSubMenus.length)
    }
    const prevSlider = () => {
        SetId(id > 0 ? (id - 1) % getSubMenus.length : getSubMenus.length + (id - 1) % getSubMenus.length)
    }
    const changeFilter = e => {
        console.log(e);
    };
    return (
        <>
            <TopPage />
            {sliderLen !== 999 &&
                <ButtonGroup className="mt-2 offset-5 col-2" block='true'>
                    <Button onClick={() => changeFilter('2')} variant="secondary">Foto</Button>
                    <Button onClick={() => changeFilter('1')} variant="secondary">Video</Button>
                </ButtonGroup>
            }
            <div className="container mt-4">
                <div className="row">
                    <div className="col-1 ">
                        {sliderLen !== 999 && <Button className="px-4" variant="link" onClick={prevSlider} style={prevnext} disabled={sliderLen === 999}>
                            <CaretLeftOutlined />
                        </Button>
                        }
                    </div>
                    <div className="col-10 bg-white" >
                        {((sliderLen === getSubMenus.length || sliderLen === 999) && !!card) ?
                            <div>
                                {card.type === '2' ?
                                    <img alt="example" src={card.url ? BACKEND_URL + card.url : flag} style={contentStyle} />
                                    : <Player playing={false} showControl={true} url={BACKEND_URL + card.url} width="100%" height="70vh" />
                                }
                                <h3 className="text-center"> {card.name}</h3>
                                <div className="text-center pb-2"> {card.description} </div>
                            </div>
                            : null
                        }
                    </div>
                    <div className="col-1 ">
                        {
                            sliderLen !== 999 && <Button className="px-4" style={prevnext} variant="link" onClick={nextSlider} disabled={sliderLen === 999}><CaretRightOutlined /></Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
const mapState = ({ getSubMenus, getIsParent }) => ({ getSubMenus, getIsParent })

export default connect(mapState, { setMenuThunk, getSubMenusThunk })(Actions)