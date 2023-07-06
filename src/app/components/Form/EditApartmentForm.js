import React, { useState,useEffect } from 'react'
import { Button, Col, Form, Input, Radio, Row } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'
import CounterBtn from '../CounterBtn/CounterBtn';
import {toast} from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const EditApartmentForm = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const { TextArea } = Input;
    const [inputs, setInputs] = React.useState({
        apartmentType: '',
        buildingNo: 0,
        flatNo: 0,
        area:'',
        rent:''

    });
    const [bed, setBed] = useState('')
    const [pantry, setPantry] = useState('')
    const [laundry, setLaundry] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [dining, setDining] = useState('')
    const [living, setLiving] = useState('')

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSave = (e) =>{
        e.preventDefault();
        try {
            const res = editApartments(inputs);
            navigate(routePaths.Admin.listBuilding);            
        } catch (error) {
            
        }
    }

    const editApartments = async (inputs) =>{
        let url = `http://devvlookin.vlookin.com/apartment?id=${id}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'PATCH');

        const data = {
            // "buildingName": inputs.buildingName,
            // "floorCount": floor,
            // "parkingCount": parkingFloor,
            // "watchman" : inputs.watchMan,
            // "landmark": inputs.location,
            // "fullName" : inputs.ownerName
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
            toast.error(error)
        }
    };

    const getApartments = () => {
        axios.get(`http://devvlookin.vlookin.com/apartment?id=${id}`)
        .then((res) => {
            setInputs({
                apartmentType:res.data.data.apartmentType,
                area:res.data.data.area,
                rent:res.data.data.rent,
                // :res.data.data.furnished,
                // :res.data.data.isStudio,
                // :res.data.data.balcony,         
                comments:res.data.data.comments,
                //  "rooms":{
                //     "bedRoom":2,
                //     "dining":1,
                //     "laundry":2,
                //     "bath":3
                // }    
            })
        })
        .catch((e) => toast.error(e))
    }

    useEffect(() => {
        getApartments();
    }, [])    

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
                            <p className='form_label'>Type Of Appartment</p>
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
                            name='area'
                            onChange={handleChange}
                            value={inputs.area}
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
                            name='rent'
                            onChange={handleChange}
                            value={inputs.rent}
                        />
                        <div className='uploadbtn'>
                            <p>File Upload</p>
                            <MdCloudUpload style={{ fontSize: '30px' }} />
                        </div>

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

export default EditApartmentForm
