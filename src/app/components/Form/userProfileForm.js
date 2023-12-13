import React, { useState } from "react";
import { Col, Input, Row, Form, Checkbox } from "antd";
import { CustomButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import { apiRoutes, routePaths } from "../../routes/config";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import CounterBtn from "../CounterBtn/CounterBtn";
import { SaveModal } from "../Modal/SaveModal";
import { CustomAlert } from "../Alert";
import BuildingDropDown from "../DropDown";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";

const Profile = ({ title, showDrawer, data }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      <div>
        {isMobile ? (
          <MobileHeader
            route={routePaths.Visitor.login}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"Add Visitor"}
            subtitle={"Welcome to Visitor Panel"}
            route={routePaths.Visitor.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>User Profile</h2>
          <p className="headerText">Welcome to Visitor Panel</p>
        </div>
      </div>
      <div className="visitor-body">
        <Form>
          <Row>
            <Col
              // span={10}
              sm={16}
              md={10}
            >
              <h2>User Id </h2>
              <h3 style={{ color: "gray" }}>{data.userId}</h3>

              <br />

              <h2>Name</h2>
              <h3 style={{ color: "gray" }}>{data.userName}</h3>

              <br />
              <h2>Role</h2>
              <h3 style={{ color: "gray" }}>{data.role}</h3>

              <br />
              <h2>Email</h2>
              <h3 style={{ color: "gray" }}>{data.email}</h3>
              <br />
            </Col>
          </Row>
          <div>
            <CustomAlert />
          </div>
        </Form>
      </div>
    </>
  );
};

export default Profile;
