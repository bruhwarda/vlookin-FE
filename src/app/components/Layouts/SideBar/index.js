import React from "react";
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

import {useNavigate}  from 'react-router';
import logo from '../../../../assets/images/v-lookin-logo.png';
import './style.css';


const SideBar = () => {

    const history = useNavigate();

    const handleUserClick = () => {
        history.push('/list');
    }

    const handleVideosClick = () => {
        history.push('/videos');
    }

    const handleFileClick = () => {
        history.push('/files');
    }

    return (
        <div className="main">
            <div>
                <div className="logo">
                    <img src = {logo} ></img>
                </div>
            <Menu  mode="inline" defaultSelectedKeys={['1']} style={{background: "rgba(74, 13, 55, 1)"}}>
                <div className="userSection">
                    <Menu.Item key="2" onClick={handleUserClick}>
                        <UserOutlined />
                        <span> Users</span>
                    </Menu.Item>

                </div>
            </Menu>
            </div>
        </div>
    )
}

export default SideBar;
    {/* <div style={{height: "50px", background: "rgba(74, 13, 55, 1)"}}>
        <Menu  mode="inline" defaultSelectedKeys={['1']} style={{background: "rgba(74, 13, 55, 1)"}}>
            <br/><br/>
            <Menu.Item className = 'logoImg' onClick={handleUserClick} >
                <img src = {logo} ></img>
            </Menu.Item>                    
            <Menu.Item key="2" onClick={handleUserClick}>
                <UserOutlined />
                <span> Users</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={handleVideosClick}>
                <VideoCameraOutlined />
                <span> Videos</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={handleFileClick}>
                <UploadOutlined />
                <span> Files</span>
            </Menu.Item>
        </Menu>
    </div> */}