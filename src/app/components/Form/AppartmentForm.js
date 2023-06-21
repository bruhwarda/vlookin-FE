import React from 'react'
import { Button, Col, Form, Input, Radio, Row } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'

const AppartmentForm = ({ title }) => {
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

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div>
                <Header title={'Add Appartment'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
            </div>
            <div className="body">
                <h1>{title}</h1>
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
                                    <Radio.Button className='radio_btn' value="a">Residential</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">Commercial</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Rooms</p>
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
                                    <Radio.Button className='radio_btn' value="a">Living</Radio.Button>
                                    <Radio.Button className='radio_btn' value="a">Pantry</Radio.Button>
                                    <Radio.Button className='radio_btn' value="a">Bedroom</Radio.Button>
                                    <Radio.Button className='radio_btn' value="a">Laundry</Radio.Button>
                                    <Radio.Button className='radio_btn' value="a">Dining</Radio.Button>
                                    <Radio.Button className='radio_btn' value="a">Studio</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">Bathroom</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div style={{ display: 'flex' }}>


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
                                    <Radio.Button className='radio-form-btn' value="a">Bed</Radio.Button>
                                    <Radio.Button value="a" className='radio-form-btn'><AiOutlineMinus /></Radio.Button>
                                    <Radio.Button value="b" className='radio-form-btn'><AiOutlinePlus /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>
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
                                    <Radio.Button className='radio-form-btn' value="a">Living</Radio.Button>
                                    <Radio.Button value="a" className='radio-form-btn'><AiOutlineMinus /></Radio.Button>
                                    <Radio.Button value="b" className='radio-form-btn'><AiOutlinePlus /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div style={{ display: 'flex' }}>
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
                                    <Radio.Button className='radio-form-btn' value="a">Pantry</Radio.Button>
                                    <Radio.Button value="a" className='radio-form-btn'><AiOutlineMinus /></Radio.Button>
                                    <Radio.Button value="b" className='radio-form-btn'><AiOutlinePlus /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>
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
                                    <Radio.Button className='radio-form-btn' value="a">Laundry</Radio.Button>
                                    <Radio.Button value="a" className='radio-form-btn'><AiOutlineMinus /></Radio.Button>
                                    <Radio.Button value="b" className='radio-form-btn'><AiOutlinePlus /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div style={{ display: 'flex' }}>
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
                                    <Radio.Button className='radio-form-btn' value="a">Dining</Radio.Button>
                                    <Radio.Button value="a" className='radio-form-btn'><AiOutlineMinus /></Radio.Button>
                                    <Radio.Button value="b" className='radio-form-btn'><AiOutlinePlus /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>
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
                                    <Radio.Button className='radio-form-btn' value="a">Bathroom</Radio.Button>
                                    <Radio.Button value="a" className='radio-form-btn'><AiOutlineMinus /></Radio.Button>
                                    <Radio.Button value="b" className='radio-form-btn'><AiOutlinePlus /></Radio.Button>
                                </Radio.Group>
                            </Form.Item>
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

export default AppartmentForm
