import React, { useState } from 'react'
import {  Col, Form, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import CounterBtn from '../CounterBtn/CounterBtn';
import { ApartmentModal } from '../Modal/ApartmentModal';

const AppartmentForm = ({ title }) => {
    const { TextArea } = Input;
    const [inputs, setInputs] = React.useState({
        apartmentType: '',
        buildingNo: 0,
        floorNo : '',
        apartmentNo : ''
    });
    const [bed, setBed] = useState('')
    const [pantry, setPantry] = useState('')
    const [laundry, setLaundry] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [dining, setDining] = useState('')
    const [living, setLiving] = useState('')
    const [open, setOpen] = useState ( false );
    const [selectedBuilding, setSelectedBuilding] = useState('');

    const handleBuildingChange = (value) => {
        setSelectedBuilding(value);
      };

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setOpen(true)
        
    }

    const onCancel = () => {
        setOpen(false)
    }


    return (
        <>
            <div>
                <Header title={'Add Appartment Details'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
            </div>
            <div className="body">
                <Row >
                    <Col span={10}>
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Appartment Type</p>
                            <Form.Item
                                name="radio-button"
                                className='form_radio_inputs'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio.Button className='radio_btn' value={inputs.apartmentType}>Residential</Radio.Button>
                                    <Radio.Button className='radio_btn' value={inputs.apartmentType}>Commercial</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className='btn_grp_container'>
                            <p className='form_label'>Number of Rooms</p>
                            <div className='appart_form_counter_group'>
                                <CounterBtn placeholder='Bed' state={bed} setState={setBed} />
                                <CounterBtn placeholder='Living' state={living} setState={setLiving} />
                            </div>
                            <div className='appart_form_counter_group'>
                                <CounterBtn placeholder='Pantry' state={pantry} setState={setPantry} />
                                <CounterBtn placeholder='Laundry' state={laundry} setState={setLaundry} />

                            </div>
                            <div className='appart_form_counter_group'>
                                <CounterBtn placeholder='Dining' state={dining} setState={setDining} />
                                <CounterBtn placeholder='Bathroom' state={bathroom} setState={setBathroom} />
                            </div>
                        </div>
                        <div>
                            <TextArea rows={4} placeholder="Comment" maxLength={6} />
                        </div>
                    </Col>
                    <Col span={10} offset={4}>
                        <Input
                            placeholder="Area"
                            className="form_input"
                            name='buildingNo'
                            onChange={handleChange}
                            
                        />
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Furnished</p>
                            <Form.Item
                                name="radio-button"
                                className='form_radio_inputs'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio.Button className='radio_btn' value="a">Semi-Furnished</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">Not Furnished</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">Fully-Furnished</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Balcony</p>
                            <Form.Item
                                name="radio-button"
                                className='form_radio_inputs'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio.Button className='radio_btn' value="a">Yes</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">No</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <Input
                            placeholder="Rent"
                            className="form_input"
                            name='mobileNo'
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <div>
                    <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'}  />
                    <ApartmentModal open={open} onCancel = {onCancel} selectedBuilding={selectedBuilding} 
                        handleBuildingChange={handleBuildingChange} handleChange = {handleChange}
                        handleSave = {handleSave} data = {inputs}
                        />
                </div>
            </div>
        </>
    )
}

export default AppartmentForm
