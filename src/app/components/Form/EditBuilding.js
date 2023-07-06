import React, { useState, useEffect } from 'react'
import {Checkbox, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { apiRoutes, routePaths } from '../../routes/config';
import CounterBtn from '../CounterBtn/CounterBtn';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { CustomAlert } from '../Alert';
import axios from 'axios';

const EditBuildingForm = ({ title }) => {
    const { id } = useParams();

    const { TextArea } = Input;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        bed: '',
        bathroom: '',
        pantry: '',
        living: '',
        dining: '',
        laundry: '',
        ownerName:'',
        buildingName:'',
        location:'',
    });

    const [floor, setFloor] = useState('');
    const [parkingFloor, setParkingFloor] = useState('');


    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = (e) =>{
        e.preventDefault();
        try {
            const res = editBuilding(inputs);
            navigate(routePaths.Admin.listBuilding);            
        } catch (error) {
            
        }
    }

    const editBuilding = async (inputs) =>{
        let url = `http://203.161.57.248:4000/building?id=${id}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'PATCH');

        const data = {
            "buildingName": inputs.buildingName,
            "floorCount": floor,
            "parkingCount": parkingFloor,
            "watchman" : inputs.watchMan,
            "landmark": inputs.location,
            "fullName" : inputs.ownerName
          }

        const requestOptions = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data),
          };

        try {
            const res =  await fetch(url, requestOptions);
            if(res.status == 200){
                toast.success('Building Edited Successfully');
                navigate(routePaths.Admin.listBuilding);
            }else{
                toast.error('Something went wrong');
            }            
        } catch (error) {
            toast.error('Network error')
        }
    };

    const getBuildings = () => {
        axios.get(`http://203.161.57.248:4000/building?id=${id}`)
        .then((res) => {
            setInputs({
                buildingName : res.data.data.buildingName,
                watchMan : res.data.data.watchman,
                location: res.data.data.landmark,
                ownerName : res.data.data.fullName,
            })
            setFloor(res.data.data.floorCount);
            setParkingFloor(res.data.data.parkingCount);
        })
        .catch((e) => toast.error(e))
    }

    useEffect(() => {
        getBuildings();
    }, [])    

    return (
        <>
            <div>
                <Header title={'Edit Building Details'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
            </div>
            <div className="body">
                <Row >
                    <Col span={10}>
                        <div style={{ marginTop: '15px' }}>
                            <Input
                                placeholder="Owner name"
                                className="form_input"
                                name='ownerName'
                                value={inputs.ownerName}
                                onChange={handleChange}
                            />
                            <p className='form_label'>No of floors</p>
                            <CounterBtn placeholder='Count of floor' state={floor} setState={setFloor} />
                            <Input
                                placeholder="Watchman"
                                className="form_input"
                                name='watchMan'
                                value={inputs.watchMan}
                                onChange={handleChange}
                            />
                        </div>


                    </Col>
                    <Col span={10} offset={4}>
                        <div style={{ marginTop: '15px' }}>
                            <Input
                                placeholder="Building name"
                                className="form_input"
                                name='buildingName'
                                value={inputs.buildingName}
                                onChange={handleChange}
                            />
                            <p className='form_label'>No of parking floors</p>
                            <CounterBtn placeholder='Count of floor' state={parkingFloor} setState={setParkingFloor} />
                            <Input
                                placeholder="Popular location"
                                className="form_input"
                                name='location'
                                value={inputs.location}
                                onChange={handleChange}
                            />
                        </div>
                    </Col>
                </Row>
                <div className='addform_btn'>
                <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                <CustomAlert/>
                </div>
            </div>
        </>
    )
}

export default EditBuildingForm
