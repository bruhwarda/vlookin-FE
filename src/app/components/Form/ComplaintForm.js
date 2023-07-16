import React, { useState } from 'react'
import { Form, Col, Input, Row, Select, Upload, Button } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { CustomAlert } from '../Alert';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../Header/MobileHeader';
import { UploadOutlined } from '@ant-design/icons';

const ComplaintForm = ({ showDrawer }) => {
    const { TextArea } = Input;
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        userName: '',
        desc: '',
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log(inputs.facilities)
        try {
            if (inputs.buildingName && inputs.ownerName && inputs.location && inputs.watchMan) {

            } else {
                toast.error('Complete Form')
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
    }
    const category = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            label: <a href="https://www.aliyun.com">3rd menu item</a>,
            key: '3',
        },
    ];
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Visitor.login} showDrawer={showDrawer} /> :
                    <Header title={'Add Complaint'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Add Complaint</h2>
                    <p className='headerText'>welcome to admin panel</p>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>
                            <p className='form_label'>Category</p>
                            <Form.Item
                                name="desc"
                            >
                                <Select className='form_select' options={category} onChange={handleChange} />
                            </Form.Item>
                            <Form.Item
                                rules={
                                    [{ required: true, message: "Please enter Name" }]
                                }
                            >
                                <Input
                                    placeholder="User name"
                                    className="form_input"
                                    name='userName'
                                    value={inputs.userName}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <TextArea
                                showCount
                                maxLength={100}
                                style={{
                                    height: 120,
                                    marginBottom: 24,
                                }}
                                value={inputs.desc}
                                onChange={handleChange}
                                placeholder="Add Description"
                            />
                        </div>
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>
                            <Form.Item
                                name="upload"
                                label="Upload Picture"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
                <div className='addform_btn'>
                    <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                    <CustomAlert />
                </div>
            </div>
        </>
    )
}

export default ComplaintForm
