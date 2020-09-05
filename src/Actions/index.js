import React, { useEffect } from "react"
import TopPage from '../components/topPage'
import { Card } from 'antd';
import { setMenuThunk } from "../Reducers/homeMenu"
import { getSubMenusThunk, filterSubMenus } from "../Reducers/subMenus"
import { BACKEND_URL } from "setting.js";
import flag from "./../images/flag.jpg"
import { connect } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { setIsParent } from "../Reducers/isParent"
import { CaretRightOutlined } from "@ant-design/icons"
import { ButtonGroup, Button } from 'react-bootstrap';
const { Meta } = Card;

const imgStyles = {
    height: '200px', objectFit: "scale-down", paddingTop: '5px'
}

const videoStyles = {
    maxHeight: '200px', width: "100%", padding: '5px'
}
const playStyles = {
    position: "absolute",
    top: '20%',
    left: '40%',
    fontSize: "70px",
    color: 'rgba(0,0,0,.7)'
}
let subMenuId = 0;
function Actions({ getSubMenusThunk, getSubMenus, setIsParent, filterSubMenus }) {
    let h = useHistory()
    let { id } = useParams();
    useEffect(() => {
        getSubMenusThunk(id);
        subMenuId = id;
    }, [getSubMenusThunk, id])

    const gotoInfo = (card, cardId) => {
        setIsParent(card)
        console.log(card);
        h.push(`/action/${id}/info/${cardId}`)
    }
    const changeFilter = e => {
        filterSubMenus(e);
    };
    return (
        <>
            <TopPage />
            <ButtonGroup className="mt-2 offset-5 col-2" block='true'>
                <Button onClick={() => changeFilter('0')} variant="secondary">All</Button>
                <Button onClick={() => changeFilter('2')} variant="secondary">Foto</Button>
                <Button onClick={() => changeFilter('1')} variant="secondary">Video</Button>
            </ButtonGroup>
            <div className="container-fluid">
                <div className="row">
                    {((subMenuId === id) && !!getSubMenus) ? getSubMenus.map(card => {
                        return (
                            <div className="col-3 mb-4" key={card.id}>
                                <Button variant="link" className="w-100 p-2 mt-4" onClick={() => gotoInfo(card, card.id)} >
                                    <Card
                                        hoverable
                                        cover={card.type === '2' || card.type === '0' ?
                                            <img alt="example" src={(card.url && (card.type === '2' || card.type === '0')) ? BACKEND_URL + card.url : flag} style={imgStyles} />
                                            :
                                            <div>
                                                <video style={videoStyles} >
                                                    <source src={BACKEND_URL + card.url} type="video/mp4" />
                                                </video>
                                                <CaretRightOutlined style={playStyles} />

                                            </div>
                                        }
                                    >
                                        <Meta title={card.name} />
                                    </Card>
                                </Button>
                            </div>
                        )
                    }) : null
                    }
                </div>
            </div>
        </>
    )
}
const mapState = ({ getSubMenus, filterSubMenus }) => ({ getSubMenus, filterSubMenus })

export default connect(mapState, { setMenuThunk, getSubMenusThunk, setIsParent, filterSubMenus })(Actions)