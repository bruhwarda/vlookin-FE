import { FileOutlined, UserOutlined, CloseOutlined, RightOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Button } from 'antd';
import { useState } from 'react';
import { Icons, Images } from '../../../../assets';
import { useNavigate } from 'react-router';
import { routePaths } from '../../../routes/config';
import './style.css';
import { Content } from 'antd/es/layout/layout';
import { EditForm } from '../../Form/EditUserForm';
import TenateForm from '../../Form/TenateForm';

const { Sider } = Layout;



// const items = [
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Add User', '3',Icons.addUserIcon),
//     getItem('List User', '4', <Icons.listUserIcon/>),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const SideBar = ({ children, items }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const addUser = () => {
    navigate(routePaths.Admin.addUser)
  }
  const listUser = () => {
    navigate(routePaths.Admin.listUser)
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        // collapsible 
        collapsed={collapsed}
        onCollapse={(value) => {
          console.log(value)
          setCollapsed(value)
        }}
        width={243}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#4A0D37'
        }}>
        <div className="logo_sidebar" style={{ display: collapsed ? 'none' : 'flex' }}>
          <img src={Images.logo} ></img>
          <CloseOutlined onClick={() => setCollapsed(true)} />
        </div>
        <div className='User_avatar_container' style={{ display: collapsed ? 'none' : 'flex' }}>
          <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
          <div className='user_role'>
            <p>Username</p>
            <small>Super Admin</small>
          </div>
        </div>
        {collapsed && <div onClick={() => setCollapsed(false)} className='collapsed_icon'><RightOutlined /></div>}
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          style={{ backgroundColor: '#4A0D37' }}
        />
       
      </Sider>
      <Content style={{
        padding: '0 0 0 245px',
      }}>
        {children}
      </Content>
    </Layout>
  );
};
export default SideBar;