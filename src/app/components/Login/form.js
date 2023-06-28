import React, { useEffect, useState } from "react";
import { Input, Form, Checkbox } from 'antd';
import { CustomButton } from "../Button";
import { routePaths,apiRoutes } from "../../routes/config";
import { useNavigate } from "react-router";
import axios from 'axios';
import { Oval } from "react-loader-spinner";


export const LoginForm = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = (false)
  const [inputs, setInputs] = useState({
    userId: "",
    password: "",
  });

  const [user, setUser] = useState([]);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      };
      let url = apiRoutes.postUser;
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
          setLoading(false)
          console.log(response.data.data.userName, 'data');
          switch (response.data.data.role) {
            case 'admin':
              navigate(routePaths.Admin.dashboard,{
                state:{
                  userName:response.data.data.userName
                }
              })
              break;
            case 'tenant':
              navigate(routePaths.Tenant.dashboard,{
                state:{
                  userName:response.data.data.userName
                }})
              break;
            case 'visitor':
              navigate(routePaths.Visitor.dashboard,
                {
                  state:{
                    userName:response.data.data.userName
                  }}
                )
              break;          
            case 'upkeeper':
              navigate(routePaths.Upkeeper.dashboard,
                {
                  state:{
                    userName:response.data.data.userName
                  }}
                )
              break;          
            case 'superAdmin':
              navigate(routePaths.SuperAdmin.dashboard,
                {
                  state:{
                    userName:response.data.data.userName
                  }}
                )
              break;                          
            default:
              break;
          }
        });
    } catch (er) {
      setLoading(false)
      console.log("er", er);
    }
  };

  return (
    <div>
     {loading ? 
     <div className='loader'>
     <Oval
       height={50}
       width={50}
       color="#4A0D37"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
       ariaLabel='oval-loading'
       secondaryColor="#6A164F"
       strokeWidth={5}
       strokeWidthSecondary={5}
     /></div> :<Form >
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
      </Form>}
    </div>
  )
}