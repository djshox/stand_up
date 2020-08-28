import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Menu1 from "./menu1";
//import 'node_modules/react-modal-video/scss/modal-video.scss';

function ModalVideo1(){

    // constructor () {
    //     super();
    //     this.state = {
    //         isOpen: false
    //     }
    //     this.openModal = this.openModal.bind(this)
    // }
    //
    // openModal () {
    //     this.setState({isOpen: true})
    // }

    const [showV, setShowV] = React.useState(false);

    const handleShowV = () => setShowV(true);
    const handleCloseV = () => setShowV(false);


       return (
            <div>
                <ModalVideo channel='youtube'
                            isOpen={showV}
                            videoId='L61p2uyiMSo'
                            onClose={handleCloseV()} />
                <button onClick={handleShowV}>Open</button>
            </div>
        )

}

export default ModalVideo1;