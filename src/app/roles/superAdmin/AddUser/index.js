import React, { useState } from "react";
import SideBar from "../../../components/Layouts/SideBar";
import { Col, Dropdown, Form, Input, Layout, Radio, Row, theme } from "antd";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../routes/config";
import { Header } from "../../../components/Header";
import { IoMdArrowDropdown } from 'react-icons/io';
import { CustomButton } from "../../../components/Button";
import { toast } from "react-toastify";
import { CustomAlert } from "../../../components/Alert";
import axios from "axios";
import { useNavigate } from "react-router";
import BuildingDropDown from "../../../components/DropDown";

export const AddSuperAdminUser = ({ showDrawer }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const navigate = useNavigate()

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [gender, setGender] = useState(1);
    const [category, setCategory] = useState('Role')
    const [inputs, setInputs] = React.useState({
        userName:'',
        email:'',
        password:'',
        userId:'',
        contact:'' //0521048854
    })
    const[allowSubUsers, setAllowSubUsers] = useState(false);
    const [allowMultipleBuildings, setAllowMultipleBuildings] = useState(false);


    const onChange = (e) => {
        setGender(e.target.value);
        setAllowSubUsers(e.target.value);
    };

    const handleMultipleBuildings = (e) => {
        setAllowMultipleBuildings(e.target.value)
    }

    const handleSubUsers = (e) => {
        setAllowSubUsers(e.target.value)
    }

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
            label: 'Maintenance',
            key: 'maintenance',
        },

    ]

    const handleMenuClick = (e) => {
        setCategory(e.key)
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const handleInputs = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const handleSave = (event) => {
        event.preventDefault();
        console.log(inputs);
        if (inputs.userName && inputs.email && inputs.contact) {
             postVisit(inputs);
        } else {
            toast.error('Complete Form')
        }
    }

    const postVisit = async (inputs) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        let url = apiRoutes.createUsers;

        try {
            console.log(inputs.userName,inputs.email, inputs.contact );
            await axios
                .post(url,
                    {
                        'userName': inputs.userName,
                        'email': inputs.email,
                        'contact':inputs.contact,
                        'password':inputs.password,
                        'role':category,
                        'userId':inputs.userId,
                        'gender':gender,
                    }
                    , config)
                .then((response) => {
                    if (response.data.status == 200) {
                        toast.success('User Created Successfully')
                        navigate(routePaths.SuperAdmin.list);
                    }
                });
        } catch (error) {
            toast.error('Network Error')
        }
    }

    const handleGoTo = () => {
        toast.info('Redirecting to Add Tenant Page');
        navigate(routePaths.Tenant.dashboard);
    }

    return (
        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Visitor.login} showDrawer={showDrawer} /> :
                    <Header title={'Add User Details'} subtitle={'welcome to Super Admin panel'} route={routePaths.Admin.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Add User Details</h2>
                    <p className='headerText'>welcome to Super admin panel</p>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
                        <Dropdown.Button menu={menuProps} trigger={['click']} icon={<IoMdArrowDropdown />}>
                                {category}
                        </Dropdown.Button>
                        <br/>
                        <br/>

                        <Input
                            placeholder="Username"
                            className="form_input"
                            name="userName"
                            value={inputs.userName}
                            onChange={handleInputs}
                            disabled={category == 'tenant' ? true : false}
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                            name="email"
                            value={inputs.email}
                            onChange={handleInputs}
                            disabled={category == 'tenant' ? true : false}
                        />
                        <Input
                            placeholder="Password"
                            className="form_input" 
                            name="password"
                            value={inputs.password}
                            onChange={handleInputs}
                            disabled={category == 'tenant' ? true : false}
                            />
                        <Input
                            placeholder="User Id"
                            className="form_input" 
                            name="userId"
                            value={inputs.userId}
                            onChange={handleInputs}
                            disabled={category == 'tenant' ? true : false}
                            />
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
                        <Form.Item>
                            <Input
                                placeholder="Contact"
                                className="form_input" 
                                name="contact"
                                value={inputs.contact}
                                onChange={handleInputs}
                                disabled={category == 'tenant' ? true : false}
                                />
                            <div>
                                <p>Gender</p>
                                <Radio.Group onChange={onChange} value={gender}
                                    disabled = {category == 'tenant' ? true : false}
                                >
                                    <Radio value={'male'}>Male</Radio>
                                    <Radio value={'female'}>Female</Radio>
                                </Radio.Group>
                            </div>
                            <br/>
                            <br/>
                            <p style={{color:'#4A0D37'}}>Real Estate</p>
                            <BuildingDropDown placeholder={'Select a Real Estate'} disabled={category == 'tenant' ? true : false}/>
                            <br/>
                            <p style={{color:'#4A0D37'}}>Building</p>
                            <BuildingDropDown disabled={category == 'tenant' ? true : false} />
                        </Form.Item>
                    </Col>
                </Row>
                    <div className='addform_btn'>
                        {
                            category == 'tenant' ? 
                            <CustomButton handleClick={handleGoTo} buttonName={'Redirecting'} bgColor={'#4A0D37'} color={'#F8F8F8'}/> 
                            :
                            <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                        }
                    </div>
                    <CustomAlert/>
            </div>
        </>

    )
}