import { Button, Col, Input, Radio, Row } from "antd";
import { ExportOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import './style.css'


export const EditForm = ({ }) => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <div className="header">
                <div>
                    <h2>Edit User</h2>
                    <p>welcome to super admin panel</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginRight: '10px' }}>Logout</p>
                    <ExportOutlined />
                </div>
            </div>
            <div className="body">
                <h2>Edit User Details</h2>
                <Row >
                    <Col>
                        <Input
                            placeholder="Username"
                            className="form_input"
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                        />
                        <div>
                            <h2>User Onboarding</h2>
                            <Input
                                placeholder="ID"
                                className="form_input" />
                        </div>
                    </Col>
                    <Col offset={6}>
                        <Input
                            placeholder="Mobile No."
                            className="form_input" />
                        <p>Category of user</p>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Management</Radio>
                            <Radio value={2}>Staff</Radio>
                        </Radio.Group>
                        <Input
                            placeholder="Password"
                            className="form_input" />
                    </Col>
                </Row>
            </div>
        </>
    )

}