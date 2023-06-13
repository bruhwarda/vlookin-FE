import React from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import TextArea from 'antd/es/input/TextArea';

const VisitorForm = ({title }) => {
    const [inputs, setInputs] = React.useState({
        name : '',
        email: '',
        comment:'',
        mobileNo:'',
        maxRooms: ''
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
      };
    
    return (
        <>
            <div>
                <Header title = {'Add Visitor'} subtitle={'welcome to visitor panel'} route = {routePaths.Visitor.login}/>
            </div>
            <div className="body">
                <h2>{title}</h2>
                <Row >
                    <Col span={10}>
                        <Input
                            placeholder="Full name"
                            className="form_input"
                            name = 'name'
                            value = {inputs.name}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Email"
                            className="form_input"
                            name = 'email'
                            type = 'email'
                            value = {inputs.email}
                            onChange={handleChange}

                        />
                        <div>
                        <TextArea
                            placeholder="Comments"
                            className="form_input"
                            name = 'comment'
                            value={inputs.comment}
                            onChange={handleChange}
                             />
                        </div>
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Mobile No."
                            className="form_input" 
                            name = 'mobileNo'
                            value = {inputs.mobileNo}
                            onChange={handleChange}
                            />
                        <Input
                            placeholder="Max Rooms"
                            className="form_input" 
                            name = 'maxRooms'
                            value = {inputs.maxRooms}
                            onChange={handleChange}
                            />
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

export default VisitorForm
