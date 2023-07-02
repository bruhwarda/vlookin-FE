import React, { useState } from 'react'
import { Button, Checkbox, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { apiRoutes, routePaths } from '../../routes/config';
import CounterBtn from '../CounterBtn/CounterBtn';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { CustomAlert } from '../Alert';
import axios from 'axios';

const EditBuildingForm = ({ title }) => {
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
        location:''
    });

    const [floor, setFloor] = useState('');
    const [parkingFloor, setParkingFloor] = useState('');

    const plainOptions = ['Restaurants', 'Parks', 'Schools', 'Hospitals', 'Supermarket', 'Gym', 'Swimming Pool'];

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };
    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = (e) =>{
        e.preventDefault();
        navigate(routePaths.Admin.addAppartment);
        try {
//            const res = addBuilding(inputs);
            
        } catch (error) {
            
        }
    }

    const addBuilding = async (inputs) =>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let url = apiRoutes.createBuilding;
        try {
            await axios
            .post( url,
                {
                    // inputs.bed,
                    // inputs.bathroom,
                    // inputs.pantry,
                    // inputs.living,
                    // inputs.dining,
                    // inputs.laundry,
                    // inputs.ownerName,
                    // inputs.buildingName,
                    // inputs.location           
                 } ,config)
            .then((response) => {
                if(response.data.status == 200){
                    toast.success('Visitor Created Successfully')
                    navigate(routePaths.Visitor.listVisitor);
                }else{
                    toast.error('Something went wrong')
                }
            });                
        } catch (error) {
            toast.error(error)
        }
    };

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
                    <p className='form_label'>Facilities</p>
                    <Checkbox.Group style={{marginLeft : '12px'}} options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
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
