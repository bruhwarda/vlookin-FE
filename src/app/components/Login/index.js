import React, { useState } from "react";
import loginPic from "../../../assets/images/loginPage.png";
import "./style.css";
import logo from "../../../assets/images/v-lookin-logo.png";
import { LoginForm } from "./form";
import { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { CustomButton } from "../Button";

export const Login = (props) => {
  const [loginOrCrm, setLoginOrCrm] = useState(0);
  const [actionCompleted, setActionCompleted] = useState(false);
  const handleChange = (e) => {
    setLoginOrCrm(e.target.value);
  };
  const handleClick = () => {
    setActionCompleted(true);
  };
  return (
    <div className="main_body">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="main_body_container">
        <div className="main_body_content">
          <div className="loginPic">
            <img src={loginPic} />
          </div>
          <div className="login_form">
            <div className="login_form_heading">
              <h2>{props.loginHeading}</h2>
            </div>
            {!actionCompleted ? (
              <div className="d-flex flex-column">
                <Radio.Group
                  onChange={handleChange}
                  className="d-flex flex-column mb-2"
                >
                  <Radio value={1}>Accounting Mangament System</Radio>
                  <Radio value={2}>CRM</Radio>
                </Radio.Group>
                <div className="d-flex justify-content-center">
                  <CustomButton
                    className="col-md-6"
                    disabled={loginOrCrm === 0 ? true : false}
                    handleClick={handleClick}
                    bgColor={"#4A0D37"}
                    color={"#F8F8F8"}
                    buttonName={"Submit"}
                  />
                </div>
              </div>
            ) : (
              loginOrCrm === 2 && (
                <div className="login_form_inputs">
                  <LoginForm name="Login" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
