import React,{useState} from "react";
import {Row, Col, Typography, Input, Form, Button, 
Radio, Switch, Slider, Select, message} from 'antd';
import { CustomButton } from "../Button";

export const LoginForm = (props) => {

    const [inputs, setInputs] = useState({
        userId: "",
		password: "",
    });

    const handleChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }


    return(
    <div>
        <Form >
            <Form.Item name="userId"
            rules={[
              {
                required: true,
                message: 'Please enter your userId',
              }
            ]}
            >
                <Input name = 'userId' placeholder="User Id"
                    value={inputs.userId}
                    onChange = {handleChange} 
                />
            </Form.Item>
            <Form.Item name="password" 
            rules={[
              {
                required: true,
                message: 'Please enter your correct password',
                // type: 'password'
              }
            ]}
            >
                <Input placeholder="Password" 
                    value={inputs.password}
                    onChange = {handleChange} 
                />
            </Form.Item>
            <div style={{textAlign: "right"}}>
                <CustomButton handleSubmit={handleSubmit} buttonName = {props.name}/>
            </div>
          </Form>
    </div>
)
}