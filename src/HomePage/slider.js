import React from "react";
import Player from "./../Player";
import { connect } from "react-redux"
import flagUzb from "./../video/UZB.mp4"
import { setMenuThunk } from "./../Reducers/homeMenu"
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div className="container-fluid">
                <Player playing={true} url={flagUzb} showControls={false} loop={true} />
            </div>
        );
    }
}

const mapState = ({ getMenus }) => ({ getMenus })

export default connect(mapState, { setMenuThunk })(HomePage);