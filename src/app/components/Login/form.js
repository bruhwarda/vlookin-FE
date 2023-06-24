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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      };
      let url = "https://dizzy-overcoat-moth.cyclic.app/auth/login";
      console.log(inputs);

      await axios
        .post(
          url,
          {
            email: inputs.userId,
            password: inputs.password,
          },
          config
        )
        .then((response) => {
          switch (response.data.role) {
            case 'admin':
              navigate(routePaths.Admin.dashboard)
              break;
            case 'tenant':
              navigate(routePaths.Tenant.dashboard)
              break;
            case 'visitor':
              navigate(routePaths.Visitor.dashboard)
              break;          
            case 'upkeeper':
              navigate(routePaths.Upkeeper.dashboard)
              break;          
            case 'superAdmin':
              navigate(routePaths.SuperAdmin.dashboard)
              break;                          
            default:
              break;
          }
        });
    } catch (er) {
      console.log("er", er);
    }
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
            className="login_form_input{
              "
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
            className="login_form_input"
            name='password'
          />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onChange} style={{ color: '#ffffff' }}>Remember me</Checkbox>
        </Form.Item>
        <CustomButton handleClick={handleSubmit} buttonName={props.name} bgColor={'#4A0D37'} color={'#F8F8F8'} />
      </Form>
    </div>
  )
}