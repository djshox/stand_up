import React from 'react';
import { Menu } from 'antd';
import { useHistory } from "react-router-dom";

const TopPage = () => {
    const h = useHistory()
    return (
        <Menu onClick={() => h.push("/")} mode="horizontal" theme="dark" >
            <Menu.Item key="mail" >
                Home
                    </Menu.Item>
        </Menu>
    );
}

export default TopPage;
