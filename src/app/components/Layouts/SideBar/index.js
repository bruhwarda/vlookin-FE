import React from 'react';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import { Icons, Images } from '../../../../assets';
import { useNavigate } from 'react-router';
import { routePaths } from '../../../routes/config';
import './style.css';

const {Sider } = Layout;
  
  const SideBar = () => {
    const navigate = useNavigate();

    const addUser = () => {
        navigate(routePaths.Admin.addUser)
    }
    const listUser =() => {
        navigate(routePaths.Admin.listUser)
    }
      return (
        <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor:'#4A0D37'
          }}
          width={243}
        >
          <div className="logo">
            <img src = {Images.logo} ></img>
          </div>
          <div className='User_avatar_container'>
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
            <div className='user_role'>
                <p>Username</p>
                <small>Super Admin</small>
            </div>
          </div>
          <Menu style={{backgroundColor: '#4A0D37'}} theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <div className='menuItem1'>
                        <img src = {Icons.userIcon}/>
                        <span> Users</span>
                    </div>
                </Menu.Item>
                <div className='menuItem2'>
                    <img src = {Icons.addUserIcon}/>
                    <Button type='text' color='#f8f8ff' className='add-user' 
                        onClick={addUser}  >
                        <span> Add user</span> 
                    </Button>
                </div>
                <div className='menuItem2'>
                    <Icons.listUserIcon/>
                    <Button type='text' color='#f8f8ff' className='add-user'
                        onClick={listUser}>
                        List Users
                    </Button>
                </div>
            </Menu>
        </Sider>
      </Layout>
    );
  };
  
  export default SideBar;