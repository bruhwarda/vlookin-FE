import React from 'react'
import logo from '../../../assets/images/v-lookin-logo.png';
import './style.css'
import TextArea from 'antd/es/input/TextArea';
import { Button, Form, Input, Radio, DatePicker } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;
const Receipt = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const formItemLayout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 14,
        },
    };
    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 4,
        },
    }
    return (
        <div>
            <div className='receipt-header'>
                <img src={logo} ></img>
                <h2>Receipt Voucher</h2>
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
                        style={{
                            maxWidth: formLayout === 'inline' ? 'none' : 990,
                            width: 750
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
                                border: '1px solid red',
                                // width: '50vw'
                            }}
                        >
                            <Form.Item
                                name="Flat No"
                                label="Flat No"
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(50% - 90px)',
                                    border: '1px solid red'
                                }}
                            >
                                <Input placeholder="Input birth year" />
                            </Form.Item>
                            <Form.Item
                                name="Period of Contract"
                                label="Period of Contract"
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(50% - 8px)',
                                    margin: '0 8px',
                                    border: '1px solid red'
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
                        style={{
                            maxWidth: formLayout === 'inline' ? 'none' : 890,
                        }}
                    >
                        <Form.Item label="Tenant A/c">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Building Details">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Flat No">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Receipt Details">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="Period of Contract">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Period Range">
                            <RangePicker />
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Receipt
