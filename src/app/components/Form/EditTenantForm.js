import React, { useState } from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import OTPmodal from '../Modal/OTPmodal';

const EditTenantForm = ({ title }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        buildingNo: '',
        flatNo: '',
        mobileNo: '',
        officeNo: '',
        nationality: ''
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
    const onSave = () => {
        console.log('click')
        setModalOpen(true)
    }
    const onCancel = () => {
        setModalOpen(false)
    }
    return (
        <>
            <div>
                <Header title={'Edit Tenant Details'} subtitle={'welcome to tenant panel'} route={routePaths.Tenant.login} />
            </div>
            <div className="body">
                <Row >
                    <Col span={10}>
                        <Input
                            placeholder="Full name"
                            className="form_input"
                            name='name'
                            value={inputs.name}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                            name='email'
                            type='email'
                            value={inputs.email}
                            onChange={handleChange}

                        />
                        <div>
                            <Input
                                placeholder="Mobile No."
                                className="form_input"
                                name='mobileNo'
                                value={inputs.mobileNo}
                                onChange={handleChange}
                            />


                            <Input
                                placeholder="Nationality"
                                className="form_input"
                                name='nationality'
                                value={inputs.nationality}
                                onChange={handleChange}
                            />
                        </div>
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Building Name"
                            className="form_input"
                            name='buildingName'
                            value={inputs.buildingNo}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Building Code"
                            className="form_input"
                            name='buildingNo'
                            value={inputs.buildingNo}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Flat no"
                            className="form_input"
                            name='flatNo'
                            value={inputs.flatNo}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Office No. "
                            className="form_input"
                            name='officeNo'
                            value={inputs.officeNo}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <div>
                    <CustomButton buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} handleClick={onSave} />
                    <CustomButton buttonName={'Cancel'} bgColor={'#F8F8FF'} color={'#00000'} />
                </div>
            </div>
            <OTPmodal open={modalOpen} onCancel={onCancel} />
        </>
    )
}

export default EditTenantForm