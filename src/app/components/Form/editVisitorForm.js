import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { CustomAlert } from '../Alert';

const EditVisitorForm = ({ title }) => {
    const { id } = useParams()

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        comment: '',
        contact: '',
        maxRooms: '',
        date: '',
        followUp:''
    });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
    const data = {
        visitorName: inputs.name,
        email: inputs.email,
        contact: inputs.contact,
        date: inputs.date,
        buildingName: null,
        flatNo: null,
        followUp:inputs.followUp
    }

    const handleSave = async (event) => {
        event.preventDefault();
        const url = `http://203.161.57.248:4000/visitor?id=${id}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'PATCH');

        const requestOptions = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data),
          };
          try {
            const res =  await fetch(url, requestOptions);
            if(res.data.status == 200){
                toast.success('Visitor Edited Successfully')
            }            
          } catch (error) {
                toast.error(error);
          }
        }

    const getUsers = async() => {
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
            .catch((e) => toast.error(e))
    }

    useEffect(() => {
        getUsers();
    }, [])

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
                            value={inputs.followUp}
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
                    <CustomAlert/>
            </div>
        </>
    )
}

export default EditVisitorForm;
