import React from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import CounterBtn from '../CounterBtn/CounterBtn';

const AddVisitorForm = ({ title }) => {
    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        date: '',
        mobileNo: '',
        maxRooms: '',
        comment: '',
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            };
            let url = "https://dizzy-overcoat-moth.cyclic.app/visitor/createVisitor";
            let body = {
                visitorName: inputs.name,
                email: inputs.email,
                visitorDate: inputs.date,
                contact: inputs.mobileNo,
                maxRooms: inputs.maxRooms,
                comments: inputs.comment
                //   flatNo,
            };
            console.log(inputs);

            await axios
                .post(
                    url,
                    {
                        visitorName: inputs.name,
                        email: inputs.email,
                        visitorDate: inputs.date,
                        contact: inputs.mobileNo,
                        maxRooms: inputs.maxRooms,
                        comments: inputs.comment
                    },
                    config
                )
                .then((response) => {
                    console.log(response.data);
                });
        } catch (er) {
            console.log("er", er);
        }
    }

    return (
        <>
            <div>
                <Header title={'Add Visitor'} subtitle={'welcome to visitor panel'} route={routePaths.Visitor.login} />
            </div>
            <div className="body">
                <h2>{title}</h2>
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
                        <Input
                            placeholder="Date"
                            className="form_input"
                            type='date'
                            name='date'
                            value={inputs.date}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Mobile No."
                            className="form_input"
                            name='mobileNo'
                            value={inputs.mobileNo}
                            onChange={handleChange}
                        />
                        <label>Flat Type</label>
                        <CounterBtn placeholder='Bedroom' />
                        <Input
                            placeholder="Other"
                            className="form_input"
                            name='other'
                            value={inputs.maxRooms}
                            onChange={handleChange}
                        />
                        <TextArea
                            placeholder="Comments"
                            className="form_input"
                            name='comment'
                            value={inputs.comment}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <div className='addform_btn'>
                    <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                    <CustomButton buttonName={'Cancel'} bgColor={'#F8F8FF'} color={'#00000'} />
                </div>
            </div>
        </>
    )
}

export default AddVisitorForm
