import React from 'react'
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { Button, Form, Input, Radio, DatePicker, Modal, Select, Row, Col } from 'antd';
import { useState } from 'react';
import { CustomButton } from '../Button';
import BuildingDropDown from '../DropDown';
import { ReceiptTable } from '../Table/receiptTable';
import moment from 'moment'
import axios from 'axios';
import { toast } from 'react-toastify';

const { RangePicker } = DatePicker;

const ReceiptModal = ({ open, setOpen, route, onCancel, handleButton, setTableShow, tableShow }) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [dates, setDates] = useState([]);
    const [receiptData, setReceiptData] = useState({
        parkingPrice: "",
        flatNo: "",
        periodOfContract: "",
        receiptDetails: "",
        total: "",
        tenantAccount: "",
        tenantName : ""
    })

    const formItemLayout = {
        labelCol: {
            span: 20,
        },
        wrapperCol: {
            span: 30,
        },
    };
    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 4,
        },
    }

    const data = [
        {
            employeeId: '01',
            name: 'John Doe',
            email: 'johndoe@email.com',
            position: 'Frontend Developer',
        },
        {
            employeeId: '02',
            name: 'Sara',
            email: 'sara@email.com',
            position: 'HR Executive',
        },
        {
            employeeId: '03',
            name: 'Mike',
            email: 'mike@email.com',
            position: 'Backend Developer',
        },
    ]
    const handleInputChange = (e) => {
        setReceiptData({ ...receiptData, [e.target.name]: e.target.value });

    };
    const onChangeInput = (e, employeeId) => {
        const { name, value } = e.target
        const editData = data.map((item) =>
            item.employeeId === employeeId && name ? { ...item, [name]: value } : item
        )

        console.log('editData', editData)
    }

    const handleBuildingChange = (value) => {
        setSelectedBuilding(value);
    };
    const handleDateChange = (value) => {
        setDates(value?.map(item => {
            return moment(item?.$d).format('DD-MM-YYYY')
        }))
    };
    const SaveReceipt = () => {
        axios.post(`https://dizzy-overcoat-moth.cyclic.app/receipt`, {
            ...receiptData,
            buildingId: selectedBuilding,
            duration: {
                from: dates[0],
                to: dates[1]
            }
        })
            .then((res) => {
                console.log(res.data)
                setTableShow(true)
            })
            .catch((e) => toast.error(e))
    }


    return (
        <div className='receipt-modal'>
            <Modal
                style={{
                    top: 50,
                }}
                width={1000}
                open={open}
                // footer={null}
                onCancel={onCancel}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                okButtonProps={{
                    style: {
                        // backgroundColor: "#4A0D37",
                        // color: 'F8F8F8',
                        // display: 'none'
                        visibility: 'hidden'
                    }
                }}
            // onOk={handleButton}

            >
                <div>
                    <div className='receipt-header'>
                        {/* <img src={logo} ></img> */}
                        <h2>Receipt Voucher</h2>
                    </div>
                    <div className='receipt-voucher-info-container'>
                        <div className='date_section'>
                            <strong>Date</strong>
                            <p>{new Date().toLocaleDateString()}</p></div>
                        <div className='receipt-header-voucher'>
                            <strong>Voucher No</strong>
                            <p>23445324349</p>
                        </div>
                    </div>
                    <div className='receipt-body'>
                        <div className='receipt-body-left'>
                            <Form
                                {...formItemLayout}
                                layout={formLayout}
                                form={form}
                                initialValues={{
                                    layout: formLayout,
                                }}
                            >
                                <Form.Item label="Building Code">
                                    <BuildingDropDown value={selectedBuilding} handleChange={handleBuildingChange} />
                                </Form.Item>
                                <Form.Item label="Receipt Details">
                                    <Input.TextArea showCount 
                                        value={receiptData.receiptDetails}
                                        name='receiptDetails'
                                        onChange={handleInputChange} />
                                </Form.Item>
                                <Row gutter={10}>
                                    <Col md={12}>
                                        <Form.Item
                                            label="Flat No"
                                        >
                                            <Input placeholder="Flat No"
                                                value={receiptData.flatNo}
                                                name="flatNo"
                                                onChange={handleInputChange} />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item
                                            label="Period of Contract"
                                        >
                                            <Input placeholder="Period of contract"
                                                value={receiptData.periodOfContract}
                                                name="periodOfContract"
                                                onChange={handleInputChange} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item label="Period Range">
                                    <RangePicker onChange={handleDateChange} />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className='receipt-body-right'>
                            <Form
                                {...formItemLayout}
                                layout={formLayout}
                                form={form}
                                initialValues={{
                                    layout: formLayout,
                                }}
                            >
                                <Form.Item label="Tenant A/C">
                                    <Row gutter={10}>
                                        <Col md={8}>
                                            <Input placeholder="Tenant Id"
                                                value={receiptData.tenantAccount}
                                                name="tenantAccount"
                                                onChange={handleInputChange} />
                                        </Col>
                                        <Col md={16}>
                                            <Input placeholder="Tenant Name" 
                                                value={receiptData.tenantName}
                                                name="tenantName"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item label="Tenant Rent">
                                    <Input placeholder="Tenant Rent"
                                        value={receiptData.total}
                                        name='total'
                                        onChange={handleInputChange} />
                                </Form.Item>
                                <Form.Item label="F.A.S Date">
                                    <Input placeholder="F.A.S Date" />
                                </Form.Item>
                                <Form.Item label="Parking Charges">
                                    <Input placeholder="Parking Charges"
                                        value={receiptData.parkingPrice}
                                        name='parkingPrice'
                                        onChange={handleInputChange} />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div>
                        <CustomButton handleClick={SaveReceipt} buttonName={'Next'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                        <br/>
                        <br/>
                       {tableShow && <ReceiptTable data={data} onChangeInput={onChangeInput} />} 
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ReceiptModal
