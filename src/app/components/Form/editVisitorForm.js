import React, { useEffect } from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const EditVisitorForm = ({ title }) => {
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://dizzy-overcoat-moth.cyclic.app/visitor?id=${id}`)
            .then((res) => {
                const date = new Date(res.data.data[0].visitDate).toISOString().split('T')[0]
                setInputs({
                    name: res.data.data[0].visitorName,
                    email: res.data.data[0].email,
                    comment: '',
                    contact: res.data.data[0].contact,
                    maxRooms: '',
                    date: date
                })
            })
            .catch((e) => console.log(e))
    }, [])

    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        comment: '',
        contact: '',
        maxRooms: '',
        date: ''
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
    const data = {
        visitorName: inputs.name,
        email: inputs.email,
        contact: null,
        date: inputs.date,
        buildingName: null,
        faltNo: null
    }
    const handleSave = (event) => {
        event.preventDefault();
        axios.patch(`https://dizzy-overcoat-moth.cyclic.app/visitor/?${id}`, data)
            .then((res) => {
                if (res.data.status == 200) {
                    toast.success('Visitor Updated Successfully')
                } else {
                    toast.error('Something went wrong')
                }
            })
            .catch((e) => toast.error(e))
    }

    return (
        <>
            <div>
                <Header title={'Edit Visitor Details'} subtitle={'welcome to visitor panel'} route={routePaths.Visitor.login} />
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
                        <Input
                            placeholder="Date"
                            className="form_input"
                            name='date'
                            value={inputs.date}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Follow-up by"
                            className="form_input"
                            name='followUp'
                            // value={inputs.comment}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Mobile No."
                            className="form_input"
                            name='mobileNo'
                            value={inputs.contact}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Max Rooms"
                            className="form_input"
                            name='maxRooms'
                            value={inputs.maxRooms}
                            onChange={handleChange}
                        />
                        <div>
                            <h3> Deal Status</h3>
                            <Radio.Group>
                                <Radio value={1}>Management</Radio>
                                <Radio value={2}>Staff</Radio>
                            </Radio.Group>
                        </div>
                        <br />
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
                </div>
            </div>
        </>
    )
}

export default EditVisitorForm;
