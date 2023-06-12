import React, { useEffect, useState } from "react";
import { Input, Form, Checkbox } from 'antd';
import { CustomButton } from "../Button";
import { routePaths } from "../../routes/config";
import { useNavigate } from "react-router";
import axios from 'axios';


export const LoginForm = (props) => {
  const navigate = useNavigate();

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
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios
        .post(
          "http://localhost:4000/auth/login",
          {
            email: inputs.userId,
            password: inputs.password,
          },
          config
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (er) {
      console.log("er", er);
    }

    // const data = postData();
    // navigate(routePaths.Tenant.dashboard);
  };


  return (
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
          <Input name='userId' placeholder="User Id"
            value={inputs.userId}
            onChange={handleChange}
            className="form_input"
          />
        </Form.Item>
        <Form.Item name="password"
          className="form_items"
          rules={[
            {
              required: true,
              message: 'Please enter your correct password',
            }
          ]}
        >
          <Input.Password
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            className="form_input"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChange} style={{ color: '#ffffff' }}>Remember me</Checkbox>
        </Form.Item>
        <CustomButton handleSubmit={handleSubmit} buttonName={props.name} bgColor={'#4A0D37'} color={'#F8F8F8'} />
      </Form>
    </div>
  )
}