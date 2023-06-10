import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Table from "../components/Table";
// import Form from "../components/Form";
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
import SideBar from '../../components/Layouts/SideBar';

import '../style.css';

const { Header, Sider, Content} = Layout;


const ApplicationRoutes = () => {

    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
     }, []);

     const handleToggle = (event) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    return (
        <Layout>
          <Sider className='sideBar' trigger={null} collapsible collapsed={collapse} width={342}>
                <SideBar/>
          </Sider>
          <Layout>
            <Header style={{padding: 0}}>
                {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: handleToggle,
                    style: {color: "black"}
                })}
            </Header>
              <Content style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                <Routes>
                    {/* <Route path="/list" component={Table} />
                    <Route path="/form" component={Form} /> */}
                    {/* <Route path="/files" component={File} />
                    <Route path="/videos" component={Videos} /> */}
                    {/* <Navigate to="/list" from="/" /> */}
                </Routes>
              </Content>
          </Layout>
        </Layout>
  );
}

export default ApplicationRoutes;