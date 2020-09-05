import React from 'react';
import { Menu } from 'antd';
import { useParams, useHistory } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons"
const TopPage = () => {
    const h = useHistory()
    let { actionId } = useParams();
    return (
        <Menu mode="horizontal" className="bg-dark text-white" >
            <Menu.Item key="prev" onClick={() => h.push(`/action/${actionId}`)} className="mt-n3 m-1  p-0">
                <LeftOutlined />
            </Menu.Item>
            <Menu.Item onClick={() => h.push("/")} key="main" className="pr-2">Главная </Menu.Item>
        </Menu>
    );
}

export default TopPage;
