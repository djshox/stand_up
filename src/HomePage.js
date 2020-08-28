import React from 'react';
import './HomePage.css';
import Player from './Player'
import axios from 'axios'
import Menu from './Menu'
// import Menu1 from './menu1'
// import {Route} from "react-router-dom";
// import ModalVideo from './ModalVideo'
import { BACKEND_URL } from "setting.js"



export default class HomePage extends React.Component {

    state = {
        insertetTxt: '',
        start_time: new Date('2020-08-25 07:00:00'),
        stop_time: new Date('2020-08-25 20:01:00'),
        gimn: true,
        kun: true,
        show: false,
        set_gimn_url: '',
        gimn_played: false,
        set_video_url: '',
        video_url: '',
        loop: false,
        show_menu: true
    };

    componentWillMount() {
        fetch(BACKEND_URL + "stand/time_plan.php")
            .then((response) => response.json())
            .then((responseJson) => {

                let stt_time = new Date(responseJson[0].start_time);
                let stp_time = new Date(responseJson[0].stop_time);
                //let time_id=responseJson[0].id;
                this.setState({
                    start_time: stt_time,
                    stop_time: stp_time
                });
                this.testFunc();

                console.log("Boshlangich vaqt: " + stt_time)
                console.log("Tugash vaqt: " + stp_time)
            });

        fetch(BACKEND_URL + "stand/get_videos.php")
            .then((response) => response.json())
            .then((responseJson) => {

                // let set_video_gimn=responseJson[0].name;
                let set_gimn_url = BACKEND_URL + 'stand/' + responseJson[0].url;

                // let set_video=responseJson[1].name;
                let set_video_url = BACKEND_URL + 'stand/' + responseJson[1].url;

                console.log(set_gimn_url);
                this.setState({
                    set_gimn_url: set_gimn_url,
                    set_video_url: set_video_url
                });

            });

        // (localStorage.getItem("gimn_played")===)
        this.setState({ gimn_played: (localStorage.getItem("gimn_played") === "true") });

    }


    onEndedd = () => {
        console.log('onEnded srabotal');
        if (this.state.video_url.includes("gimn.mp4")) {
            this.setState({ gimn_played: true, loop: true });

            ////////////////////////////////////////////////
            //                 POST to DB      gimn_played:false   this.state.gimn_played
            //
            //      console.log('Gimn tugaganidan sunggi: '+this.state.gimn_played);

            localStorage.setItem("gimn_played", this.state.gimn_played)


            // let formData1= new FormData();
            // formData1.append("status_of_gimn",this.state.gimn_played);
            // axios.post("http://localhost/stand/update_gimn_status.php",formData1)
            //     .then(res=>console.log(res.data.query_status))
            //     .catch(err=>console.log(err));


            /////////////////////////////////////////////////////////
        }
    };


    testFunc = () => {

        let start_Hours = this.state.start_time.getHours();       //
        let start_Minutes = this.state.start_time.getMinutes();
        let start_Seconds = this.state.start_time.getSeconds();

        let stop_Hours = this.state.stop_time.getHours();
        let stop_Minutes = this.state.stop_time.getMinutes();
        let stop_Seconds = this.state.stop_time.getSeconds();

        setInterval(() => {
            let v = new Date(); // Joriy vaqt
            let yil = v.getFullYear();   // Joriy yil
            let oy = v.getMonth();       // Joriy Oy
            let kun = v.getDate();       // Joriy Kun
            let soat = v.getHours();     // Joriy Soat
            let minut = v.getMinutes();  // Joriy minut
            let sekund = v.getSeconds(); // Joriy sekund
            //
            let start_vaqt = new Date(yil, oy, kun, start_Hours, start_Minutes, start_Seconds);
            let stop_vaqt = new Date(yil, oy, kun, stop_Hours, stop_Minutes, stop_Seconds);
            let vaqt1 = new Date(yil, oy, kun, soat, minut, sekund);
            //
            console.log('Ertalabki vaqt: ', start_vaqt);
            console.log('Kechki vaqt: ', stop_vaqt);
            console.log('Hozirgi vaqt: ', vaqt1);
            //
            if (vaqt1 >= start_vaqt && vaqt1 < stop_vaqt) {

                this.setState({ show_menu: false });

                console.log('Hozirgi vaqt intervalda');
                if (this.state.show === false) {
                    if (this.state.gimn_played === false) {
                        this.setState({
                            show: true,
                            video_url: this.state.set_gimn_url
                        });
                    }
                    else  /////   Gimn utib bulgan holat
                    {
                        this.setState({
                            show: true,
                            video_url: this.state.set_video_url
                        });
                    }
                }
                else //// Video aylanib turgan vaqt
                {

                    if (this.state.gimn_played === false) {
                        this.setState({
                            show: true,
                            video_url: this.state.set_gimn_url
                        });
                    }
                    else {
                        this.setState({
                            show: true,
                            video_url: this.state.set_video_url
                        });
                    }

                }
            }

            else {
                console.log('Hozirgi vaqt intervaldan tashqarida');
                this.setState({ show: false, gimn_played: false, show_menu: true });
                ////////////////////////////////////////////////
                //                 POST to DB      gimn_played:false   this.state.gimn_played

                //console.log('Intervaldan chiqshdagi: '+this.state.gimn_played);


                localStorage.setItem("gimn_played", this.state.gimn_played);

                // let formData= new FormData();
                // formData.append("status_of_gimn",this.state.gimn_played);
                // axios.post("http://localhost/stand/update_gimn_status.php",formData)
                //     .then(res=>{console.log(res.data.query_status);
                //    })
                //     .catch(err=>console.log(err));


                /////////////////////////////////////////////////////////
            }

        }, 5000); // setInterval()

    };


    sendToPHP = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("temp_data", this.state.insertetTxt);
        axios.post(BACKEND_URL + "stand/temp.php", formData)
            .then(res => console.log(res.data.temp_data))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                {(this.state.show_menu) ? <Menu /> : <Player
                    show={this.state.show}
                    url={this.state.video_url}
                    onEndedd={this.onEndedd}
                    loop={this.state.loop}
                />}

                {/*<Menu1/>*/}
                {/*<ModalVideo/>*/}



                {/*<input type="text" onChange={e => this.setState({ insertetTxt: e.target.value })}/>*/}
                {/*<button onClick={this.sendToPHP}> Send to PHP </button>*/}
            </div>
        );
    }
}


