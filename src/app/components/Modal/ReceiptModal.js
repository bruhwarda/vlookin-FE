import React from 'react'
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { Button, Form, Input, Radio, DatePicker, Modal } from 'antd';
import { useState } from 'react';
import { CustomButton } from '../Button';

const { RangePicker } = DatePicker;

const ReceiptModal = ({ open, setOpen, route, onCancel, handleButton }) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');

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
                    style:{
                        backgroundColor:"#4A0D37",
                        color:'F8F8F8'
                    }
                }}
                onOk={handleButton}
          
            >
                <div className='receipt-header'>
                    {/* <img src={logo} ></img> */}
                    <h2>Receipt Voucher</h2>
                </div>
                <div className='receipt-header-voucher'>
                    <strong>Voucher No</strong>
                    <p>23445324349</p>
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
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Building Details">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Receipt Details">
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                }}
                            >
                                <Form.Item
                                    name="Flat No"
                                    label="Flat No"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                >
                                    <Input placeholder="Input birth year" />
                                </Form.Item>
                                <Form.Item
                                    name="Period of Contract"
                                    label="Period of Contract"
                                    style={{
                                        display: 'inline-block',
                                        margin: '0 8px',
                                    }}
                                >
                                    <Input placeholder="Input birth month" />
                                </Form.Item>
                            </Form.Item>
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
                            <Form.Item label="Tenant A/c">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Period Of Contract">
                                <Input placeholder="contract" />
                            </Form.Item>
                            <Form.Item label="Parking Price">
                                <Input placeholder="parking price" />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ReceiptModal
