import React, { useState, useEffect } from 'react';
import SideBar from '../../../components/Layouts/SideBar';
import { Layout, Space, theme, Input, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style.css';
import CustomTable from '../../../components/Table';

const { Search } = Input;

export const ListUser = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onSearch = (value) => {
        console.log(value)
    }


    //     useEffect(() => {
    //         axios("http://localhost:3001/users")
    //           .then((response) => {
    //           console.log(response.data);
    //           setData(response.data);
    //           setFilteredData(response.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         setError(err);
    //       });
    //   }, []);


    return (
        <div>
            <SideBar />
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Content
                    style={{
                        margin: '0px 47px -136px',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{
                            padding: 20,
                            textAlign: 'center',
                            background: colorBgContainer,
                        }}
                    >
                        <div className='headerSection'>
                            <div className='heading_section'>
                                <div className='section_heading1'>
                                    <h6>View Users</h6>
                                </div>
                                <div className='section_heading2'>
                                    <span>Welcome to Admin panel</span>
                                </div>
                            </div>
                        </div>
                        <div className='section_searhbox'>
                            <div className='searchBox'>
                                <Search
                                    placeholder="Search"
                                    onSearch={onSearch}
                                    searchBox
                                >
                                </Search>
                            </div>

                        </div>
                        <div className='section_table'>
                            <CustomTable />
                        </div>
                    </div>

                </Content>
            </Layout>
        </div>
    )

}