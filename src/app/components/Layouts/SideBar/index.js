import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Button } from 'antd';
import { useState } from 'react';
import { Images } from '../../../../assets';
import { useNavigate } from 'react-router';
import { routePaths } from '../../../routes/config';
import './style.css';
import { Content } from 'antd/es/layout/layout';

const { Sider } = Layout;

const SideBar = ({ children, items, role, userName }) => {
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
  const onClick = (e) => {
    if (e.key === 'add_visitor') {
      navigate(routePaths.Visitor.dashboard)
    } else if (e.key === 'list_visitor') {
      navigate(routePaths.Visitor.listVisitor)
    } else if (e.key === 'tenantlist') {
      navigate(routePaths.Tenant.listTenant)
    } else if (e.key === 'addtenant') {
      navigate(routePaths.Tenant.dashboard)
    }
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
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
            <p>{userName}</p>
            <small>{role}</small>
          </div>
        </div>
        {collapsed && <div onClick={() => setCollapsed(false)} className='collapsed_icon'><RightOutlined /></div>}
        <Menu
          onClick={onClick}
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