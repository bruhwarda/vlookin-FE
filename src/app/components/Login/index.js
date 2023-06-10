import React from "react";
import loginPic from '../../../assets/images/loginPage.png';
import './style.css'
import logo from '../../../assets/images/v-lookin-logo.png';
import { LoginForm } from "./loginForm";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { CustomButton } from "../Button";


export const Login = () => {
    return (
        <div >
            <div className="main_body">
                <div className="logo">
                        <img src = {logo} ></img>
                </div>
                <div className="main_body_content">
                    <div className="loginPic">
                            <img src={loginPic}/>
                    </div>
                    <div className="login_form">
                        <div className="login_form_heading">
                        <ArrowLeftOutlined />
                            <h2>Super admin login</h2>
                        </div>
                        <div className="login_form_inputs">
                            <LoginForm name = 'admin'  />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}