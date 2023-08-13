import React, { useState } from "react";
import SideBar from "../../../components/Layouts/SideBar";
import { Col, Dropdown, Form, Input, Layout, Radio, Row, theme } from "antd";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../components/Header/MobileHeader";
import { routePaths } from "../../../routes/config";
import { Header } from "../../../components/Header";
import { IoMdArrowDropdown } from 'react-icons/io';

export const AddSuperAdminUser = ({ showDrawer }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [value, setValue] = useState(1);
    const [category, setCategory] = useState('tenant')
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const items = [
        {
            label: 'Tenant',
            key: 'tenant',
        },
        {
            label: 'Visitor',
            key: 'visitor',
        },
        {
            label: 'Admin',
            key: 'admin',
        },
        {
            label: 'User',
            key: 'user',
        },

    ]

    const handleMenuClick = (e) => {
        setCategory(e.key)
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (

        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Visitor.login} showDrawer={showDrawer} /> :
                    <Header title={'Add User Details'} subtitle={'welcome to admin panel'} route={routePaths.Admin.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Add User Details</h2>
                    <p className='headerText'>welcome to admin panel</p>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
                        <Input
                            placeholder="Username"
                            className="form_input"
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                        />
                        <Input
                            placeholder="Password"
                            className="form_input" />
                        <div>
                            <p>Gender</p>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={'male'}>Male</Radio>
                                <Radio value={'female'}>Female</Radio>
                            </Radio.Group>
                        </div>
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
                        <Form.Item>
                            <Dropdown.Button menu={menuProps} trigger={['click']} icon={<IoMdArrowDropdown />}>
                                {category}
                            </Dropdown.Button>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        </>

    )
}