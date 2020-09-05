import React from 'react';
import { Menu } from 'antd';


import { useHistory } from "react-router-dom";

const TopPage = ({ filterData }) => {
    const h = useHistory()


    return (
        <Menu mode="horizontal" className="bg-dark text-white" >
            <Menu.Item onClick={() => h.push("/")} key="main" className="px-2">Главная</Menu.Item>

        </Menu>
    );
}

export default TopPage;
