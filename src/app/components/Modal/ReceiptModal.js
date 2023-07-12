import React from 'react'
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { Button, Form, Input, Radio, DatePicker, Modal, Select, Row, Col } from 'antd';
import { useState } from 'react';
import { CustomButton } from '../Button';
import BuildingDropDown from '../DropDown';
import { ReceiptTable } from '../Table/receiptTable';

const { RangePicker } = DatePicker;

const ReceiptModal = ({ open, setOpen, route, onCancel, handleButton, setTableShow, tableShow }) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const [selectedBuilding, setSelectedBuilding] = useState('');

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
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChangeInput = (e, employeeId) => {
        const { name, value } = e.target
        console.log('name', name)
        console.log('value', value)
        console.log('employeeId', employeeId)

        const editData = data.map((item) =>
            item.employeeId === employeeId && name ? { ...item, [name]: value } : item
        )

        console.log('editData', editData)

        // setEmployeeData(editData)
    }

    const handleBuildingChange = (value) => {
        setSelectedBuilding(value);
    };


    return (
        <div className='receipt-modal'>
            <Modal
                style={{
                    top: 20,
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
                    {!tableShow ?
                        <>
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
                                            <BuildingDropDown value={selectedBuilding} handleChange={handleBuildingChange}/>
                                        </Form.Item>
                                        {/* <Form.Item label="Building Details">
                                            <Input placeholder="input placeholder" />
                                        </Form.Item> */}
                                        <Form.Item label="Receipt Details">
                                            <TextArea rows={4} />
                                        </Form.Item>
                                        <Row gutter={10}>
                                            <Col md={12}>
                                                <Form.Item
                                                    name="Flat No"
                                                    label="Flat No"
                                                >
                                                    <Input placeholder="Flat No" />
                                                </Form.Item>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Item
                                                    name="Period of Contract"
                                                    label="Period of Contract"
                                                >
                                                    <Input placeholder="Period of contract" />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item label="Period Range">
                                            <RangePicker />
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
                                                    <Input placeholder="Tenant Id" />
                                                </Col>
                                                <Col md={16}>
                                                    <Input placeholder="Tenant Name" />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Tenant Rent">
                                            <Input placeholder="Tenant Rent" />
                                        </Form.Item>
                                        <Form.Item label="F.A.S Date">
                                            <Input placeholder="F.A.S Date" />
                                        </Form.Item>
                                        <Form.Item label="Parking Charges 1">
                                            <Input placeholder="Parking Charges 1" />
                                        </Form.Item>
                                        <Form.Item label="Parking Charges 2">
                                            <Input placeholder="Parking Charges 2" />
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                            <div>
                                <CustomButton handleClick={() => setTableShow(true)} buttonName={'Next'} bgColor={'#4A0D37'} color={'#F8F8F8'} />

                            </div></>
                        :  <ReceiptTable data={data} onChangeInput={onChangeInput} position={position}/> }
                </div>
            </Modal>
        </div>
    )
}

export default ReceiptModal
