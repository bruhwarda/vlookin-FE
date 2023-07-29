import React, { useState } from 'react'
import { Space, Button, Modal, Row, Col, Dropdown, message, Form, Input, } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { IoMdArrowDropdown } from 'react-icons/io';

import './style.css'

const ViewCompliantModal = ({ visibleModal, setVisibleModal, data }) => {
    const [status, setStatus] = useState('in Progress')
    const [input, setInput] = useState({
        assignee: '',
        assignTo: ''
    })
    const items = [
        {
            label: 'in Progress',
            key: 'in Progress',
        },
        {
            label: 'can View',
            key: 'can View',
        },
        {
            label: 'can Read',
            key: 'can Read',
        },
    ]
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const handleMenuClick = (e) => {
        console.log('click', e);
        setStatus(e.key)
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    const handleCancel = () => {
        setVisibleModal(false);
    }
    const handleChange = (e) => {

    }
    return (
        <div>
            <Space wrap>
                <Modal
                    centered
                    open={visibleModal}
                    footer={null}
                    width={650}
                    onCancel={handleCancel}
                >
                    <div className='modal-body'>
                        <h2 className='complaint-heading'>{data[0].complaintTitle}</h2>
                        <Row>
                            <Col md={13} sm={16}>
                                <h4 className='desc'>Description</h4>
                                <p>{data[0].description}</p>
                                <Form
                                    layout="vertical">
                                    <Form.Item
                                        label='Assignee'
                                        className='form_input_modal'
                                        rules={
                                            [{ required: true, message: "Please enter assignee" }]
                                        }
                                    >
                                        <Input
                                            placeholder="Assignee"
                                            name='assignee'
                                            value={input.assignee}
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                </Form>
                                <Form
                                    layout="vertical">
                                    <Form.Item
                                        label='Assign To'
                                        className='form_input_modal'
                                        rules={
                                            [{ required: true, message: "Please enter assign to" }]
                                        }
                                    >
                                        <Input
                                            placeholder="Assign To"
                                            name='assignee'
                                            value={input.assignTo}
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                </Form>

                            </Col>
                            <Col offset={isMobile ? 0 : 4} md={7} sm={16}>
                                <div className='status-dropdown'>
                                    <Dropdown.Button menu={menuProps} trigger={['click']} icon={<IoMdArrowDropdown />}>
                                        {status}
                                    </Dropdown.Button>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Modal>
            </Space>
        </div>
    )
}

export default ViewCompliantModal
