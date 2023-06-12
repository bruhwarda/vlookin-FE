import React from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { ExportOutlined } from '@ant-design/icons';
import { CustomButton, CustomOutlineButton } from '../Button';

const TenateForm = ({ }) => {
    const [value, setValue] = React.useState(1);

    return (
        <>
            <div className="header">
                <div>
                    <h2>Add Tenant</h2>
                    <p className='headerText'>welcome to admin panel</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className='logoutBtn'>Logout</p>
                    <ExportOutlined />
                </div>
            </div>
            <div className="body">
                <h2>Add Tenant Details</h2>
                <Row >
                    <Col span={10}>
                        <Input
                            placeholder="Fullname"
                            className="form_input"
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                        />
                        <div>

                            <Input
                                placeholder="Flat no"
                                className="form_input" />
                            <Input
                                placeholder="Nationality"
                                className="form_input" />
                        </div>
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Building No."
                            className="form_input" />

                        <Input
                            placeholder="Mobile No."
                            className="form_input" />
                        <Input
                            placeholder="Office No. "
                            className="form_input" />
                    </Col>
                </Row>
                <div>
                    <CustomButton buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                    <CustomButton buttonName={'Cancel'} bgColor={'#F8F8FF'} color={'#00000'} />
                </div>
            </div>
        </>
    )
}

export default TenateForm
