import React from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';

const TenateForm = ({title }) => {
    const [value, setValue] = React.useState(1);

    return (
        <>
            <div>
                <Header title = {'Add Tenant'} subtitle={'welcome to admin panel'} route = {routePaths.Tenant.login}/>
            </div>
            <div className="body">
                <h2>{title}</h2>
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
