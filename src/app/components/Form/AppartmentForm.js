import React, { useState } from 'react'
import {  Col, Form, Input, Radio, Row } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import CounterBtn from '../CounterBtn/CounterBtn';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../Header/MobileHeader';
import { ApartmentModal } from '../Modal/ApartmentModal';

const AppartmentForm = ({ title, showDrawer }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const { TextArea } = Input;
    const [inputs, setInputs] = React.useState({
        apartmentType: '',
        buildingNo: 0,
        floorNo : '',
        apartmentNo : '',
        apartmentType:'',
        furnished : ''
    });
    const [bed, setBed] = useState('')
    const [pantry, setPantry] = useState('')
    const [laundry, setLaundry] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [dining, setDining] = useState('')
    const [living, setLiving] = useState('')
    const [open, setOpen] = useState ( false );
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [balcony, setBalcony] = useState('');

    const handleBuildingChange = (value) => {
        setSelectedBuilding(value);
      };

    const handleRadioChange = (e) => {
        setInputs({furnished: e.target.value});
    };

    const handleBalcony = (e) => {
        setBalcony(e.target.value);
    }

    const handleApartment = (e) =>{
        setInputs({apartmentType: e.target.value});
    }


    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setOpen(true);
        try {
            if(inputs.apartmentType && inputs.ownerName && inputs.location && inputs.watchMan){
                const res = addBuilding(inputs);
            }else{
                toast.error('Complete Form')
            }            
        } catch (error) {
            toast.error('Something went wrong')
        }

    }

    const onCancel = () => {
        setOpen(false)
    }


    return (
        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Visitor.login} showDrawer={showDrawer} /> :
                    <Header title={'Add Appartment Details'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Add Appartment Details</h2>
                    <p className='headerText'>welcome to admin panel</p>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
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
                                <Radio.Group defaultValue="Residential" buttonStyle="solid"></Radio.Group>
                                <Radio.Group onChange={handleApartment} defaultValue='Residential'>
                                    <Radio.Button className="radio_btn" value='Residential'>Residential</Radio.Button>
                                    <Radio.Button className="radio_btn" value='Commercial'>Commercial</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className='btn_grp_container'>
                            <p className='form_label'>Number of Rooms</p>
                            <div className='appart_form_counter_group1'>
                                <div className='appart_form_counter_group'>
                                    <p className='form_label'>Bedroom</p>
                                    <CounterBtn placeholder='Bed' state={bed} setState={setBed} />
                                </div>
                                <div className='appart_form_counter_group'>
                                    <p className='form_label'>Living</p>
                                    <CounterBtn placeholder='Living' state={living} setState={setLiving} />
                                </div>
                            </div>
                            <div className='appart_form_counter_group1'>
                                <div className='appart_form_counter_group'>
                                    <p className='form_label'>Pantry</p>
                                    <CounterBtn placeholder='Pantry' state={pantry} setState={setPantry} />
                                </div>
                                <div className='appart_form_counter_group'>
                                    <p className='form_label'>Laundary</p>
                                    <CounterBtn placeholder='Laundry' state={laundry} setState={setLaundry} />
                                </div>
                            </div>
                            <div className='appart_form_counter_group1'>
                                <div className='appart_form_counter_group'>
                                    <p className='form_label'>Dining</p>
                                    <CounterBtn placeholder='Dining' state={dining} setState={setDining} />                            
                                </div>
                                <div className='appart_form_counter_group'>
                                    <p className='form_label'>Bathroom</p>
                                    <CounterBtn placeholder='Bathroom' state={bathroom} setState={setBathroom} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <TextArea rows={4} placeholder="Comment" maxLength={6} />
                        </div>
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
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
                                <Radio.Group defaultValue='Semi-Furnished' buttonStyle="solid"></Radio.Group>
                                <Radio.Group onChange={handleRadioChange} defaultValue='Semi-Furnished'>
                                    <Radio.Button className='radio_btn' value="Semi-Furnished">Semi-Furnished</Radio.Button>
                                    <Radio.Button className='radio_btn' value="Not Furnished">Not Furnished</Radio.Button>
                                    <Radio.Button className='radio_btn' value="Fully-Furnished">Fully-Furnished</Radio.Button>
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
                                <Radio.Group defaultValue='Yes' buttonStyle="solid"></Radio.Group>
                                <Radio.Group onChange={handleBalcony} defaultValue='Yes'>
                                    <Radio.Button className='radio_btn' value="Yes">Yes</Radio.Button>
                                    <Radio.Button className='radio_btn' value="No">No</Radio.Button>
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
