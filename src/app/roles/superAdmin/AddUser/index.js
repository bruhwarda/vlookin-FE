import React from "react";
import SideBar from "../../../components/Layouts/SideBar";
import { Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;

export const AddUser = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return(
        <div>
            <SideBar/>
            <div>
                <Layout
                    className="site-layout"
                    style={{
                    marginLeft: 200,
                    }}
                >
                    <Content
                        style={{
                            margin: '24px 16px 0',
                            overflow: 'initial',
                        }}
                        >
                        <div
                            style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            }}
                        >
                            <p>there will be a add user form</p>
                        </div>
                    </Content>
                    <Footer
                    style={{
                        textAlign: 'center',
                    }}
                    >
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>            
           </div>
    </div>
    )
}