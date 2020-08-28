import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'antd';
import { BACKEND_URL } from "setting.js"
import './style.css'
import TopPage from 'components/topPage'

const contentStyle = {
    height: 'calc( 100vh - 200px)',
    border: "5px solid #0a1532",
    borderRadius: "10px"
};

function Menu2() {

    return (
        <div className='backGround'>
            < TopPage />

            <div className="row m-0">
                <div className="col-6 offset-3">
                    <div class="neons">
                        <h4 className="text-uppercase">туғилган КУНИНГИЗ БИЛАН ТАБРИКЛАЙМИЗ!!! </h4>
                    </div>
                    <Carousel autoplay dotPosition="top" className="ml-4 pl-4">
                        <div>
                            <img style={contentStyle} src={BACKEND_URL + "stand/images/Urmonov_R_S.jpg"}
                                alt="Урмонов Р.С." />
                            <h3 className="text-center text-white font-weight-bold"> Урмоновa А.У.</h3>
                            <p className="text-center text-white mt-n2"> (Сержант II степени)</p>
                        </div>
                        <div>
                            <img style={contentStyle} src={BACKEND_URL + "stand/images/Kamoliddinov_A_U.jpg"} alt="Камолиддинов А.У." />
                            <h3 className="text-center text-white font-weight-bold"> Камолиддинов А.У.</h3>
                            <p className="text-center text-white mt-n2"> (Сержант III степени)</p>
                        </div>

                    </Carousel>
                </div>
            </div>
        </div>



    );
}

export default Menu2;
