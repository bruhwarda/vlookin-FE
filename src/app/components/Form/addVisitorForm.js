import React,{useEffect, useState} from 'react'
import {Col, Input, Row, Form, Alert } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import CounterBtn from '../CounterBtn/CounterBtn';
import { SaveModal } from '../Modal/SaveModal';
import { CustomAlert } from '../Alert';
import { showNotification } from '../../redux/notification/actions';
import { useDispatch } from 'react-redux';

const AddVisitorForm = ({ title }) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        date: '',
        mobileNo: '',
        comment: '',
        buildingName:'',
        flatNo:''
    });
    const [maxRooms, setMaxRooms] = React.useState('')
    const [open, setOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [validateInputs, setValidateInputs] = useState({
        email: false
    })

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const validateEmail = (event) => {
        let email=event.target.value
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!email.match(pattern)){
            setEmailError("Please enter valid email address");
            return false;
        }else{
            setEmailError("");
            setValidateInputs({email : true})
          return true
        }
      }

    const handleSave =  (event) => {
        event.preventDefault();
        if(inputs.name && inputs.email && inputs.visitDate && inputs.buildingName && inputs.flatNo && inputs.contact
            && inputs.maxRooms && inputs.comment){
                const createVisit = postVisit(inputs);
        }else{
            console.log('all field need to be filled')
        }
    }

    const postVisit = async (inputs) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let url = "https://dizzy-overcoat-moth.cyclic.app/visitor/createVisit";
        try {
            await axios
            .post( url,
                {
                    visitorName: inputs.name,
                    email: inputs.email,
                    visitDate: inputs.date,
                    buildingName:inputs.buildingName,
                    flatNo:inputs.flatNo,
                    contact: inputs.mobileNo,
                    maxRooms: inputs.maxRooms,
                    comments: inputs.comment
                }
                ,config)
            .then((response) => {
                setOpen(true);
                console.log(response.data);
            });                
        } catch (error) {
            setShowAlert(true);
        }
    }    
    return (
        <>
            <div>
                <Header title={'Add Visitor'} subtitle={'welcome to visitor panel'} route={routePaths.Visitor.login} />
            </div>
            <div className="visitor-body">
                {/* <h2>{title}</h2> */}
                <Form>
                    <Row >
                        <Col span={10}>
                            <Form.Item  name='name'                            
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter your name',
                                    }
                                ]}
                                >
                                <Input
                                placeholder="Full name"
                                className="visitor_form_input"
                                name='name'
                                value={inputs.name}
                                onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item name='mobileNo'
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter your mobile Number',
                                    }
                                ]}                                
                            >
                                <Input
                                    placeholder="Mobile No."
                                    className="visitor_form_input"
                                    name='mobileNo'
                                    value={inputs.mobileNo}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item
                                name='date'
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter Visiting Date',
                                    }
                                ]}                                
                            >
                                <label style={{color:'#4A0D37'}}>Visiting Date</label>
                                <Input
                                    placeholder="Visitng Date"
                                    className="visitor_form_input"
                                    name='date'
                                    type='date'
                                    value={inputs.date}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <TextArea
                                    placeholder="Comments"
                                    className="visitor_form_input"
                                    name='comment'
                                    value={inputs.comment}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={10} offset={4}>
                            <Form.Item
                                name='email'
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter Email',
                                    }
                                ]}                                
                            >
                                <Input
                                    placeholder="Email"
                                    className="visitor_form_input"
                                    name='email'
                                    type='email'
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item
                                name='buildingName'
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter Building Name',
                                    }
                                ]}                                
                                >
                                <Input
                                    placeholder="Building Name"
                                    className="visitor_form_input"
                                    name='buildingName'
                                    value={inputs.buildingName}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item
                                name='flatNo'
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter Flat Number',
                                    }
                                ]}                                
                                >
                                <Input
                                    placeholder="Flat Number"
                                    className="visitor_form_input"
                                    name='flatNo'
                                    value={inputs.flatNo}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <label style={{color:'#4A0D37'}}>Flat Type</label>
                                <CounterBtn placeholder='Bed Rooms' state={maxRooms} setState={setMaxRooms} />
                                <Input
                                    placeholder="Other"
                                    className="visitor_form_input"
                                    name='maxRooms'
                                    value={inputs.maxRooms}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className='addform_btn'>
                        <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                        <SaveModal route = {routePaths.Visitor.listVisitor} open={open} setOpen={setOpen}/>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddVisitorForm
