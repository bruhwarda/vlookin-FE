import React,{useState} from "react";
import {Row, Col, Typography, Input, Form, Button, 
Radio, Switch, Slider, Select, message, Checkbox} from 'antd';
import { CustomButton } from "../Button";

export const LoginForm = (props) => {

    const [inputs, setInputs] = useState({
        userId: "",
		password: "",
    });

    const handleChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
                    className="form_input"
                />
            </Form.Item>
            <Form.Item name="password" 
            className="form_items"
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
                    className="form_input"
                />
            </Form.Item>
            <Form.Item>
            <Checkbox onChange={onChange} style={{color: '#ffffff'}}>Remember me</Checkbox>
            </Form.Item>
                <CustomButton handleSubmit={handleSubmit} buttonName = {props.name}/>
          </Form>
    </div>
)
}