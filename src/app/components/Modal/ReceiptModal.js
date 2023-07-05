import React from 'react'
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { Button, Form, Input, Radio, DatePicker, Modal } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;

const ReceiptModal = ({ open, setOpen, route }) => {
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
    const handleCancel = () => {
        setOpen(false);
    }
    return (
        <div className='receipt-modal'>
            <Modal
                style={{
                    top: 20,
                }}
                width={1000}
                open={open}
                footer={null}
                onCancel={handleCancel}
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
                        // style={{
                        //     maxWidth: formLayout === 'inline' ? 'none' : 990,
                        //     width: 750
                        // }}
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
                        // style={{
                        //     maxWidth: formLayout === 'inline' ? 'none' : 890,
                        // }}
                        >
                            <Form.Item label="Tenant A/c">
                                <Input placeholder="input placeholder" />
                            </Form.Item>

                        </Form>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default ReceiptModal
