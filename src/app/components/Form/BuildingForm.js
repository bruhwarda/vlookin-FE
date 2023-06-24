import React, { useState } from 'react'
import { Button, Checkbox, Col, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'
import CounterBtn from '../CounterBtn/CounterBtn';

const BuildingForm = ({ title }) => {
    const { TextArea } = Input;
    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        buildingNo: 0,
        flatNo: 0,
        mobileNo: 0,
        officeNo: 0,
        nationality: ''
    });
    const [bed, setBed] = useState('')
    const [pantry, setPantry] = useState('')
    const [laundry, setLaundry] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [dining, setDining] = useState('')
    const [living, setLiving] = useState('')

    console.log({
        bed: bed,
        bathroom: bathroom,
        pantry: pantry,
        living: living,
        dining: dining,
        laundry: laundry
    })
    const plainOptions = ['Restaurants', 'Parks', 'Schools', 'Hospitals', 'Supermarket', 'Gym', 'Swimming Pool'];
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };
    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
    return (
        <>
            <div>
                <Header title={'Add Building'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
            </div>
            <div className="body">
                <h1>{title}</h1>
                <Row >
                    <Col span={10}>
                        <div style={{ marginTop: '15px' }}>
                            <Input
                                placeholder="Full name"
                                className="form_input"
                                name='mobileNo'
                                onChange={handleChange}
                            />
                            <p className='form_label'>No of floors</p>
                            <Input
                                placeholder="No of floor"
                                className="form_input"
                                name='mobileNo'
                                onChange={handleChange}
                            />
                            <CounterBtn placeholder='Count of floor' state={bed} setState={setBed} />
                            <Input
                                placeholder="Watchman"
                                className="form_input"
                                name='mobileNo'
                                onChange={handleChange}
                            />
                        </div>


                    </Col>
                    <Col span={10} offset={4}>
                        <div style={{ marginTop: '15px' }}>
                            <Input
                                placeholder="Building name"
                                className="form_input"
                                name='mobileNo'
                                onChange={handleChange}
                            />
                            <p className='form_label'>No of parking floors</p>
                            <Input
                                placeholder="No of parking floor"
                                className="form_input"
                                name='mobileNo'
                                onChange={handleChange}
                            />
                            <CounterBtn placeholder='Count of floor' state={bed} setState={setBed} />
                            <Input
                                placeholder="Popular location"
                                className="form_input"
                                name='mobileNo'
                                onChange={handleChange}
                            />
                        </div>


                    </Col>
                    <p className='form_label'>Facilities</p>
                    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />

                </Row>
                <div>
                    <CustomButton buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                    <CustomButton buttonName={'Cancel'} bgColor={'#F8F8FF'} color={'#00000'} />
                </div>
            </div>
        </>
    )
}

export default BuildingForm
