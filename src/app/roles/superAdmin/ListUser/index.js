import React from 'react';
import SideBar from '../../../components/Layouts/SideBar';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';


export const ListUser = ( ) => {
    return(
        <div>
            <SideBar/>
            <Layout>
                <Content>
                    <h2>List Users </h2>
                </Content>
            </Layout>
        </div>
    )

}